#= require ../d3
class Histogram extends app.views.D3
  
  className: "fixed flex-container flex-center z4 flash-container bg-darken-4"
  
  events: 
    "click .close" : "remove"
  
  initialize: (@options=null) ->
    @data = _.map(@options.data, (d) -> d.data)
    
    @columns = []
    app.view.$el.find(".filters .filter.active").removeClass(".active")
    app.flash "Select a data column for X Axis"
    
    app.view.$el.find(".filters .filter").on "click", @setColumn

  
  setColumn: (e) =>
    name = e.currentTarget.text
    unless _.isNumber( @data[0][name] )
      app.flash "Please select a numerical data"
      return false

    @columns.push name 

    if @columns.length is 1
      app.flash "Now please select a data column for Y Axis"  

    else if @columns.length is 2
      app.view.$el.find(".filters .filter").off "click", @setColumn 
      @render()
    
    
  draw: () ->
    # _.map @columns, (f) -> _.pluck(@data,f)
    @columns[0] = _.pluck(@data,@columns[0])
    @columns[1] = _.pluck(@data,@columns[1])    
    
    # Generate a Bates distribution of 10 random variables.
    values = @columns[1] #d3.range(1000).map( d3.random.bates(10) )
    
    # A formatter for counts.
    formatCount = d3.format(",.0f")
      
    margin = {top: 10, right: 30, bottom: 30, left: 30}
    width = @width() - margin.left - margin.right
    height = @height() - margin.top - margin.bottom
    
    x = d3.scale.linear()
        .domain([ 0, _.max( @columns[0] ) ])
        .range([ 0, width ])
          

    # Generate a histogram using twenty uniformly-spaced bins.
    data = d3.layout.histogram().bins(x.ticks(20))(values)
           

    y = d3.scale.linear().domain([0, d3.max(data, (d) -> d.y )]).range([height, 0])
    
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
    
    svg = d3.select(@d3select).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    bar = svg.selectAll(".bar")
        .data(data)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", (d) -> "translate(" + x(d.x) + "," + y(d.y) + ")" )
    
    bar.append("rect")
        .attr("x", 1)
        .attr("width", x(data[0].dx) - 1)
        .attr("height", (d) -> height - y(d.y) )

    bar.append("text")
        .attr("dy", ".75em")
        .attr("y", 6)
        .attr("x", x(data[0].dx) / 2)
        .attr("text-anchor", "middle")
        .text( (d) -> formatCount(d.y) )

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
    
app.views.Histogram = Histogram