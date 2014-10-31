#= require ../d3
class Buble extends app.views.D3
  
  initialize: (@options=null) ->
    @data = _.map(@options.data, (d) -> d.data)
    
    @columns = []
    app.view.$el.find(".filters .filter.active").removeClass(".active")
    # app.flash "Please select a label column", null, 2
    
    app.view.$el.find(".filters .filter").on "click", @setColumn
  
  setColumn: (e) =>
    e.preventDefault()
    e.stopPropagation()
    name = e.currentTarget.text

    @columns.push name 

    # if @columns.length is 1
    #   app.flash "Now please select value column", null, 2

    if @columns.length is 2
      app.view.$el.find(".filters .filter").off "click", @setColumn 
      @render()  
  
  draw: () -> 
    columns=@columns
    width = @width()
    height = @height()
    
    @nodes = _.map @data, (d) -> 
      {
        label: d[columns[0]]
        value: d[columns[1]]
        x: Math.random() * 900
        y: Math.random() * 800
      }  

    @center = {x: width / 2, y: height / 2}
    @layout_gravity= -0.01
    @damper = 0.1
    
    # these will be set in create_nodes and create_vis
    @vis = null
    @circles = null
    @force = null
    
    # nice looking colors - no reason to buck the trend
    @fill_color = d3.scale.ordinal()
      .domain(["low", "medium", "high"])
      .range(["#d84b2a", "#beccae", "#7aa25c"])

    # use the max total_amount in the data as the max in the scale's domain
    max_amount = d3.max(@nodes, (d) -> d.value)
    radius_scale = d3.scale.pow().exponent(0.5).domain([0, max_amount]).range([2, height / 4])
    @nodes = _.map @nodes, (n) -> 
      n.radius = radius_scale(n.value)
      n.tx = radius_scale(max_amount) + Math.random() * (width - radius_scale(max_amount))
      n.ty = radius_scale(max_amount) + Math.random() * (height - radius_scale(max_amount))
      n
    @nodes.sort (a,b) -> b.value - a.value
        
    @vis = d3.select(@d3select).append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "svg_vis")
      .attr("class","shrink")

    @circles = @vis.selectAll("circle")
      .data(@nodes, (d) -> d.label)

    # used because we need 'this' in the 
    # mouse callbacks
    that = this

    # radius will be set to 0 initially.
    # see transition below
    @circles.enter().append("circle")
      .attr("r", 0)
      .attr("fill", (d) => @fill_color(d.label))
      .attr("stroke-width", 2)
      .attr("stroke", (d) => d3.rgb(@fill_color(d.label)).darker())
      .on("mouseover", (d,i) -> that.show_details(d,i,this))
      .on("mouseout", (d,i) -> that.hide_details(d,i,this))

    # Fancy transition to make bubbles appear, ending with the
    # correct radius
    @circles.transition().duration(2000).attr("r", (d) -> d.radius)
    
    @start()
    
  charge: (d) ->
      -Math.pow(d.radius, 2.0) / 8  
      
  # Starts up the force layout with
  # the default values
  start: () =>
    @force = d3.layout.force()
      .nodes(@nodes)
      .size([@width(), @height()])
      .gravity(@layout_gravity)
      .charge(@charge)
      .friction(0.9)
      .on "tick", @tick
      .start()
      
  tick: (e) =>
    
    
    @circles.each(@move_towards_center(e.alpha))
    .attr("cx", (d) => Math.max( d.radius, Math.min( @width() - d.radius, d.x) ) )
    .attr("cy", (d) => Math.max( d.radius, Math.min( @height() - d.radius, d.y) ) )
    
    q = d3.geom.quadtree(@circles)
    i = 0
    n = @circles.length
    while ++i < n
      q.visit collide(@circles[i])  
        
    @circles
    .attr("cx", (d) ->  d.x )
    .attr("cy", (d) ->  d.y )
    
    

    
  # Moves all circles towards the @center
  # of the visualization
  move_towards_center: (alpha) =>
    (d) =>
      # d.x = d.x + (d.tx - d.x) * (@damper + 0.02) * alpha
      # d.y = d.y + (d.ty - d.y) * (@damper + 0.02) * alpha
      d.x = d.x + (@center.x - d.x) * (@damper + 0.02) * alpha
      d.y = d.y + (@center.y - d.y) * (@damper + 0.02) * alpha            
  
  show_details: (data, i, element) =>
    d3.select(element).attr("stroke", "black")
    # content = "<span class=\"name\">Title:</span><span class=\"value\"> #{data.name}</span>"
    # @tooltip.showTooltip(content,d3.event)


  hide_details: (data, i, element) =>
    d3.select(element).attr("stroke", (d) => d3.rgb(@fill_color(d.label)).darker())
    # @tooltip.hideTooltip()
  
  collide = (node) ->
    r = node.radius
    nx1 = node.x - r
    nx2 = node.x + r
    ny1 = node.y - r
    ny2 = node.y + r
    (quad, x1, y1, x2, y2) ->
      if quad.point and (quad.point isnt node)
        x = node.x - quad.point.x
        y = node.y - quad.point.y
        l = Math.sqrt(x * x + y * y)
        r = node.radius + quad.point.radius
        if l < r
          l = (l - r) / l * .5
          node.x -= x *= l
          node.y -= y *= l
          quad.point.x += x
          quad.point.y += y
      x1 > nx2 or x2 < nx1 or y1 > ny2 or y2 < ny1          
      
app.views.Buble = Buble