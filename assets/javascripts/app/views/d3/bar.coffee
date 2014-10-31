#= require ../d3
class Bar extends app.views.D3
  

  draw: () ->
    
    dataset = @dataset
    barPadding = 1
    textHeight = 24
             
    w = @width()
    h = @height()

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
    
app.views.Bar = Bar