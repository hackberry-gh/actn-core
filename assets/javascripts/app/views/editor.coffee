#= require ./form
class Editor extends app.views.Form
  
  className: "flex flex-5"
  
  initialize: (@options=null) ->
    super
    @listenTo(@model,'change',@render)
    @listenTo(@model,'destroy',@close)    
    @listenTo(@model,'invalid',@showValidationErrors)        
    
    app.api.get(
      "/api/models",
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
    "click .tabs a" : "toggleSource"
  
  template: (data, partials = {}) ->
    app.getTemplate("editor")(data, partials)
  
  render: () ->
    @$el.html @template(@model)
    
    @$container ?= app.view.$el.find(".flex-container")
    @$container.remove @className
    @$container.append @$el

    @editorCode = new Behave(
      textarea: @$el.find("textarea[name=meta]")[0],
      replaceTab: true
      softTabs: true
      tabSize: 2
      autoOpen: true
      overwrite: true
      autoStrip: true
      autoIndent: true
      fence: true
    )
    
    @editorBody = new Behave(
      textarea: @$el.find("textarea[name=body]")[0],
      replaceTab: true
      softTabs: true
      tabSize: 2
      autoOpen: true
      overwrite: true
      autoStrip: true
      autoIndent: true
      fence: true
    )
    
    @$el.find("textarea.code").autosize()
    @$el.find("textarea.code").trigger('autosize.resize')    
    
    app.postRender()
    @delegateEvents()
    @
    
  close: () ->
    @remove()
    app.router.navigate(@collection.name,{silent: true})
    @
    
  edit: () ->
    @$el.find(".tabs").addClass("dark")
    @$el.find(".save").toggleClass('hidden')
    @$el.find(".edit").toggleClass('hidden')
    @$el.find("form").toggleClass("bg-dark-gray")
    @$el.find("textarea").removeAttr("disabled")
    @
    
  showValidationErrors: (model, errors) ->
    error_list = []
    for field, error of errors.validation
      error_list.push "#{field} #{JSON.stringify(error)}"
    app.flash error_list.join("<br/><br/>"), "bg-red white"
    @
    
  save: ->
    try
      params = JSON.parse(@$el.find("textarea[name=meta]").val())
      params['body'] = @$el.find("textarea[name=body]").val()
    catch error
      return app.flash "Malformed JSON: #{error}", "bg-red white"
      
    if typeof(params) is "string"
      return app.flash "Malformed JSON", "bg-red white"

    props = {wait: true , error: onError}
    if @model.isNew()  
      _.extend(props,{success: onSave})
    else
      _.extend(props,{silent: true})           
    @model.save(params, props)
    @
    

  toggleSource: (e) ->
    e.preventDefault()    
    $a = $(e.currentTarget)
    current = $a.attr("ref")    
    @$el.find('textarea').addClass('hidden')
    @$el.find("textarea[name=#{current}]").removeClass("hidden")
    @$el.find(".tabs a").removeClass("is-active")
    $a.addClass("is-active")
    @$el.find("textarea.code").trigger('autosize.resize')        


    
    
app.views.Editor = Editor