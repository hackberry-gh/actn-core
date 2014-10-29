class Flash extends Backbone.View
  
  className: "fixed flex-container flex-center z4 flash-container bg-darken-4"
  
  events: 
    "click .close" : "remove"
  
  initialize: (@options=null) ->
    super
    @render()
    if @options.timeout?
      setTimeout( @_remove , @options.timeout * 1000 )
      
  _remove: =>
    @remove()
    
  template: (data={}, partials=[]) ->
    partials = _.object partials, _.map( partials, (id) -> app.getTemplate(id)(data) )
    app.getTemplate('flash')(data, partials)
  
  render: () ->
    @$el.html @template(@options?.data,@options?.partials)  
    # @$el.addClass "bg-#{@options.color}"
    app.$body.prepend @$el
    app.postRender()
    
app.views.Flash = Flash    