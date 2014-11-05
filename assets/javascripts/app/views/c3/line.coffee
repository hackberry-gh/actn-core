#= require ../c3
class Line extends app.views.C3
  
  render: () ->
    super
    app.flash "Select columns for X Axis, Labels and Values", null, 2
    @   
  
      
  draw: () ->    
    keys = @columns
    data = @data    
    
    if @columnSelector.mapEnabled()

      [colTime,colLabels,colValues] = keys
      
      groups = _.groupBy(data, (d) -> d[colLabels])

      timeValues = _.map(data, (d) -> d[colTime] )
      columns = [ _.flatten([ colTime, timeValues ]) ]
      
      # fill the gap 
            
      _.forEach(groups, (values, label) -> 
        
        buffer = _.flatten [ label, _.map(timeValues, (t) -> 0) ]
        
        _.forEach(values, (v) -> 
          buffer[ columns[0].indexOf(v[colTime]) ] = v[ colValues ]
        )
        
        columns.push buffer
      )      
      
    else
      columns = _.map( keys, (k) ->
        _.flatten [k, _.pluck(data,k)]
      )  
    
    
    @generate({
      x: keys[0]
      columns: columns
    })
    
    @columnSelector.remove()

  
app.views.C3.Line = Line