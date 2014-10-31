class D3 extends Backbone.View
  
  className: "flex-20 d3-container"
  
  d3select: ".d3-container"
  
  initialize: (@options=null) ->
    @render()
  
  render: () ->
    @draw()
    app.postRender()
    @
    
  draw: -> 
  
  resize: ->  
  
  width: -> $(window).innerWidth() - $(".fix-96").width()
  
  height: -> $(window).innerHeight() - $(".search-header").height()
    
app.views.D3 = D3