class Page extends Backbone.View
  
  className: "page"
  
  initialize: (@options=null) ->
    super
    @render()
  
  template: (data={}, partials=[]) ->
    partials = _.object partials, _.map( partials, (id) -> app.getTemplate(id)(data) )
    app.getTemplate(@id)(data, partials)
  
  render: () ->
    @$el.html @template(@options?.data,@options?.partials)  
    $("#main").html @$el
    app.postRender()
  
  remove: ->
    @list?.remove()  
    super()
    
app.views.Page = Page    