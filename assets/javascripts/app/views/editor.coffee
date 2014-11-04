#= require ./form
class Editor extends app.views.Form
  
  className: "flex flex-5"
  
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
    
    # @$el.find("textarea.code").autosize()
    # @$el.find("textarea.code").trigger('autosize.resize')
    
    app.postRender()
    @delegateEvents()
    @
    
  save: ->
   try
     params = JSON.parse(@$el.find("textarea[name=meta]").val())
     params.body =  @$el.find("textarea[name=body]").val()
   catch error
     return app.flash "Malformed JSON: #{error}", "bg-red white"
     
   if typeof(params) is "string"
     return app.flash "Malformed JSON", "bg-red white"
     
   console.log params   
   @model.save(params, {wait: true, success: onSave, error: onError})
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

    
app.views.Editor = Editor