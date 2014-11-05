#= require ../c3
class Pie extends app.views.C3
  
  render: () ->
    super
    app.flash "Select columns for Labels and Values", null, 1.5    
    @   
  
      
  draw: () ->    
    keys = @columns
    data = @data    
    
    if @columnSelector.mapEnabled()

      columns = _.map(data, (d) ->
        _.map( keys, (k) -> d[k] )
      )
      
    else
      columns = _.map(keys, (k) ->
        _.flatten [k, _.pluck(data,k)]
      )
    
    console.log(columns)
    @generate({
      type: "pie",
      columns: columns
    })
    
    @columnSelector.remove()

  
app.views.C3.Pie = Pie