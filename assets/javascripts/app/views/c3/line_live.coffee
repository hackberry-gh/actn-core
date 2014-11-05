#= require ../c3
class LineLive extends app.views.C3
  
  render: () ->
    app.postRender()
    @   
  
  remove: ->
    $(window).off "resize", @resize  
    @$el.remove()
    @stopListening()
    @
    
  draw: () ->    
    @generate({
        x: 'x',
        columns: [
          ['x', new Date()]
        ]
    })
    @
  
  generate: (data) ->    
    @chart = c3.generate({
      bindto: @container
      data: data
      axis:
        x:
          type: 'timeseries'
          tick:
            format: '%H:%M:%S'
      padding: 
        top: 24
        bottom: 24
        left: 48
        right: 48
      grid:
        x:
          show: true
        y:
          show: true
    })
    @resize()
  
  height: ->
    super - 104
  
app.views.C3.LineLive = LineLive