#= require ./flash
class D3 extends app.views.Flash
  
  className: "fixed flex-container flex-center z4 flash-container bg-darken-4"
  
  # events:
  #   "click .close" : "remove"
  
  initialize: (@options=null) ->
    @dataset = _.map( @options.data, (d) -> _.values(d.data) ).sort()
    @render()
    
  template: (data={}, partials=[]) ->
    partials = _.object partials, _.map( partials, (id) -> app.getTemplate(id)(data) )
    app.getTemplate('d3')(data, partials)
  
  render: () ->
    @$el.html @template(@options?.data,@options?.partials)  
    app.$body.prepend @$el
    dataset = @dataset
    barPadding = 1
    textHeight = 24
             
    w = @$el.find(".flash").width()
    h = @$el.find(".flash").height()

    svg = d3.select(".d3-container")
                .append("svg")
                .attr("width", w)
                .attr("height", h)
    
    yScale = d3.scale.linear()
                         .domain([0, d3.max(dataset, (d) -> d[1] )])
                         .range([0, h - textHeight])
                                     
    svg.selectAll("rect")
       .data(@dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) -> i * (w / dataset.length) )
       .attr("y", (d, i) -> h - yScale(d[1])  )
       .attr("width", (d,i) -> w / dataset.length - barPadding )
       .attr("height", (d,i) -> yScale(d[1]) )       
       .attr("fill", (d) -> "rgba(0,118,223,#{0.1 + yScale(d[1]) / h})" )
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")  
       .text((d) -> "#{d[0]}: #{d[1]}")
       .attr("x", (d,i) -> i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 )
       .attr("y", (d,i) -> h - yScale(d[1]) - 2 )
       .attr("text-anchor", "middle")
       .attr("font-family", "sans-serif")
       .attr("font-size", "10px")
       # .attr("fill", "white")
    
    app.postRender()
    
app.views.D3 = D3