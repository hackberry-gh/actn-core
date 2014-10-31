#= require ../d3
class Pie extends app.views.D3
    
  initialize: (@options=null) ->
    @data = _.map(@options.data, (d) -> d.data)
    
    @columns = []
    
    @zX = d3.scale.linear().range([0, @radius])
    @zY = d3.scale.linear().range([0, @radius])
    @node = null

    @$tableNameFilterBtn = app.view.$el.find(".filters .filter:first-child")    
    @$tableNameFilterBtn.addClass("hidden")
    @$activeFiltersStash = app.view.$el.find(".filters .filter.active")    
    app.view.$el.find(".filters .filter.active").removeClass("active").removeClass("bg-red").addClass("bg-mid-gray")
    $bg = $("<div class=\"filterbg shrink bg-darken-4 absolute top-0\">").insertBefore app.view.$el.find(".filters")
    app.flash "Please select a label column then a value column", null, 2
    
    app.view.$el.find(".filters .filter").on "click", @setColumn
    
    $(window).on "resize", @resize
  
  remove: ->
    $(window).off "resize", @resize  
    @$tableNameFilterBtn.removeClass("hidden")    
    @$activeFiltersStash.addClass("active").addClass("bg-red").removeClass("bg-mid-gray")
    super
  
  setColumn: (e) =>
    e.preventDefault()
    e.stopPropagation()
    name = e.currentTarget.text
    $(e.currentTarget).addClass("active").addClass("bg-red").removeClass("bg-mid-gray")

    @columns.push name 

    # if @columns.length is 1
    #   app.flash "Now please select value column", null, 2

    if @columns.length is 2
      $(".filterbg").remove()
      app.view.$el.find(".filters .filter").off "click", @setColumn 
      @render()  
      
  resize: =>
    if @svg
      width = @width()
      height = @height()
      @radius = Math.min(width, height) / 2.2
      @$el.css("height": height)
      d3.select("svg").attr("height", height)
      @svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")                  
      @partition.size([2 * Math.PI, @radius * @radius])    
      @path.data(@partition.value((d)->d.value).nodes)
        .transition()
        .duration(0)
        .attrTween("d", @arcTween)
      @renderText(true)  
    
  draw: () => 
    columns=@columns
    width = @width()
    height = @height()
    @radius = Math.min(width, height) / 2.2
    color = d3.scale.category20c()
    data = _.map( @data,(d) -> { name: d[columns[0]], value: d[columns[1]] } )
    root = {name: "root", children: data}
    
    @svg = d3.select(@d3select).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    
    @partition = d3.layout.partition()
        .sort(null)
        .size([2 * Math.PI, @radius * @radius])
        .value((d) -> d.value)
    
    @arc = d3.svg.arc()
        .startAngle( (d)  -> d.x)
        .endAngle( (d) -> d.x + d.dx)
        .innerRadius( (d) -> Math.sqrt(d.y))
        .outerRadius( (d) -> Math.sqrt(d.y + d.dy))

    @path = @svg.datum(root)
      .selectAll("path")
      .data(@partition.nodes)
      .enter()
      .append("path", (d,i) -> "svg:text#t#{i}")
      .attr("display", (d) -> if d.depth then null else "none" ) # hide inner ring
      .attr("d", @arc)
      .attr("id", (d,i) -> "#{i}")
      .style("stroke", "#fff")
      .style("fill", (d) -> color(d.name) )
      .style("fill-rule", "evenodd")
      .on("mouseover",@rollOver)
      .on("mouseout",@rollOut)
      .each(stash)
    
    textEnter = @renderText()   
    
    textEnter
    .append("tspan")
    .attr("id",(d,i)->"tsp-#{i}")
    .attr("class","pie-span")
    .attr("fill-opacity",0)    
    .attr("x", 0)
    .style("fill", (d) -> color(d.name) )      
    .text( (d) -> if d.depth then "#{d.name} #{d.value}" else "" )
  
  renderText: (resize = false) =>
    padding = 16
    x = d3.scale.linear().domain([0, 2 * Math.PI]).range([0, 2 * Math.PI])
    y = d3.scale.linear().domain([0, @radius * @radius]).range([0, @radius])
    text = @svg.selectAll("text").data(@partition.nodes)
    textEnter = if resize then text.selectAll("text") else text.enter().append("text")
    textEnter.attr("text-anchor", (d) ->
      (if x(d.x + d.dx / 2) > Math.PI then "start" else "end")
    )
    .attr("class", (d) ->
      (if x(d.x + d.dx / 2) > Math.PI then "" else "tright")
    )
    .attr("dy", ".2em")
    .attr("transform", (d) ->
      angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90
      "rotate(" + angle + ")translate(" + (y(d.y) + padding) + ")rotate(" + ((if angle > 90 then -180 else 0)) + ")"
    )
    
  
  brightness = (rgb) ->
    rgb.r * .299 + rgb.g * .587 + rgb.b * .114
          
  stash = (d) ->
    d.x0 = d.x
    d.dx0 = d.dx
    return

  rollOver: ->
    d3.select("tspan#tsp-#{this.id}").transition().ease("in").duration(100).attr("fill-opacity",1)
  rollOut: ->
    d3.select("tspan#tsp-#{this.id}").transition().ease("out").duration(100).attr("fill-opacity",0)    
      
  # Interpolate the arcs in data space.
  arcTween: (a) =>
    i = d3.interpolate(
      x: a.x0
      dx: a.dx0
    , a)
    (t) =>
      b = i(t)
      a.x0 = b.x
      a.dx0 = b.dx
      @arc b
    
    
  
app.views.Pie = Pie