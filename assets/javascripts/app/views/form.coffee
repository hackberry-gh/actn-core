#= require ./json_form

class Form extends Backbone.View
  
  className: "flex flex-5"
  
  initialize: (@options=null) ->
    super
    @listenTo(@model,'change',@render)
    @listenTo(@model,'destroy',@close)    
    @listenTo(@model,'invalid',@showValidationErrors)        
    
    app.api.get(
      "/api/core/models",
      {select: ["schema"], where:{name: @model.constructor.name},limit:1},
      null,
      (data) =>
        
        @model.constructor.schema=data[0].schema
        
        if @model.get("uuid")?
          @model.fetch()
        else  
          @render()  
          @edit()
    )
  
  events: 
    "click .close": "close"
    "click .edit": "edit"
    "click .save": "save"
    "click .destroy": "destroy"
    "click .error-close": "closeError"
    "keydown textarea": "onKeyDown"
  
  template: (data, partials = {}) ->
    app.getTemplate("form")(data, partials)
  
  render: () ->
    @$el.html @template(@model)
    
    @$container ?= app.view.$el.find(".flex-container")
    @$container.remove @className
    @$container.append @$el

    @jsonForm = new app.views.JsonForm(model: @model)
    @jsonForm.save = @save
    @jsonForm.render().$el.insertAfter @$el.find("header")
    
    app.postRender()
    @delegateEvents()
    @
    
  close: () ->
    @remove()
    app.router.navigate(@collection.name,{silent: true})
    @
    
  edit: () ->
    @$el.find(".save").toggleClass('hidden')
    @$el.find(".edit").toggleClass('hidden')
    @$el.find("form").toggleClass("bg-dark-gray")
    @$el.find("textarea").removeAttr("disabled")
    @
    
  showValidationErrors: (model, errors) ->
    error_list = []
    for field, error of errors.validation
      error_list.push "#{field} #{JSON.stringify(error,null,2)}"
    app.flash "<pre class=\"bg-red white\">#{error_list.join("\n")}</pre>", "bg-red white"
    @
    
  save: (params) ->
    if params
      @model.save(params, {wait: true, success: onSave, error: onError})
    @
    
  destroy: ->   
    if confirm("Are you sure to destroy")
      @model.destroy() 
      @collection.remove @model
    @  
    
  closeError: ->
    @$el.find(".errors").addClass("hidden")
    @
    
  ##
  # private
  
  onSave = (model) -> 
    app.router.navigate("#{app.view.list.collection.name}/#{model.get('uuid')}/edit",{silent: true})
    app.view.list.collection.add(model,{merge: true})
    app.flash "Saved!", "bg-green white", 2
  
  onError = (model, response, options) ->  
    errors = response.responseJSON
    messages = []
    for field of errors
      messages.push "#{field} #{JSON.stringify(errors[field],null,2)}"
    app.flash "<pre class=\"bg-red white\">#{messages.join("\n")}</pre>", "bg-red white"
    
    
app.views.Form = Form