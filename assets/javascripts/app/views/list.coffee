class List extends Backbone.View
  
  className: "flex flex-2 overflow-auto border-right max-288"
    
  initialize: (@options=null) ->
    super()
    @listenTo(@collection,'reset',@render)
    @listenTo(@collection,'remove',@render)
    @listenTo(@collection,'add',@render)
    @listenTo(@collection,'change',@render)    
    @collection.fetch(data: @collection.query, reset: true)
  
  template: (data = {}, partials = []) ->
    app.getTemplate("list")(data, partials)
  
  render: ->
    @$el.html @template(@collection)
    @$el.insertAfter app.view.$el.find(".flex-1")
    app.postRender()
    @
    
  remove: ->
    @form?.remove()
    super()
    
app.views.List = List    