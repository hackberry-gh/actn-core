class C3 extends Backbone.View
  
  className: "flex-20 chart-container overflow-hidden padding1"
  
  container: ".chart-container"
  
  initialize: (@options=null) ->
    super
    @data = _.map(@options.data, (d) -> d.data)
    @columns = []
    @chart = null
    @length = 0
    @columnSelector = new app.views.C3ColumnSelector(chartView: @)
    @render()
    $(window).on "resize", @resize
      
  render: () ->
    @columnSelector.render()
    app.postRender()
    @   
  
  remove: ->
    $(window).off "resize", @resize  
    @columnSelector.remove()
    super
    
  generate: (data) ->
    @chart = c3.generate(
      bindto: @container
      type: @type
      data: data
      zoom:
        enabled: true
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
    )
    @resize()
      
  flow: (columns) ->
    return unless @chart
    @chart.flow({columns: columns, length: @length})
    if _.flatten(_.values(@chart.x())).length % 20 == 0
      @length = if @length is 1 then 0 else 1
    @
  
  width: -> $(window).innerWidth() - $(".fix-96").width()
  
  height: -> $(window).innerHeight() - $(".search-header").height()
  
  resize: =>
    height = @height()
    @$el.css("height": height, "max-height": height)
    @chart?.resize()
    
app.views.C3 = C3