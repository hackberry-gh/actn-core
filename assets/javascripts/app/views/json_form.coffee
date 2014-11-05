class JsonForm extends Backbone.View

  tagName: "form"
  
  className: "form-container"
      
  tabTmpl: (data) -> 
    Mustache.template("""<a href="#!" class="left button button-nav-tab button-nav-dark is-active" ref="{{name}}">{{name}}</a>""")(data)
      
  textareaTmpl: (data) ->
    Mustache.template("""<textarea disabled name="{{name}}" class="p2 field-dark table-cell full-width code hidden" spellcheck="false">{{value}}</textarea>""")(data)

  events: 
    "keydown textarea": "onKeyDown"
    "dblclick textarea[name=meta]": "onDblClick"
    "click .tabs a" : "toggleSource"    
  
  template: (data ={}, partials = {}) ->
    app.getTemplate("json_form")(data, partials)
  
  render: () ->
    @$el.html @template(@model)  
    data = {name: "meta"}
    if typeof @model.meta is "function"
      data.value = @model.meta()
    else
      data.value = JSON.stringify(_.omit(@model.toJSON(),"uuid","created_at","updated_at"),null,2)
    @renderAttribute(data) 
    @
  
  save: (data) ->
    console.log(data)
    
  value: =>
    hasError = false    
    try  
      json = JSON.parse(@$el.find("textarea[name=meta]").val())
    catch error
      hasError = true    
      app.flash "Malformed JSON: #{error}", "bg-red white"
     
    if typeof(json) is "string"
      app.flash "Malformed JSON", "bg-red white"
      hasError = true
        
    _.forEach(@$el.find("textarea").not("[name=meta]"), (tEl) =>
      $tEl = $(tEl)
      name = $tEl.attr("name")

      try
        value = JSON.parse $tEl.val()
      catch error  
        if _.isString(@model.get(name))
          value = $tEl.val()
        else
          value = null
          hasError = true
          app.flash "Malformed JSON: #{error}", "bg-red white"    
      json[name] = value 
    )  
    if hasError then false else json  
  
  onKeyDown: (e) ->
    if (e.ctrlKey or e.metaKey) and e.keyCode is 83
      e.preventDefault()
      @save(@value())
    @
    
  onDblClick: (e) =>
    $textarea =  $(e.currentTarget)    
    startPos = e.currentTarget.selectionStart;
    endPos = e.currentTarget.selectionEnd;
    attribute = e.currentTarget.value.substring(startPos, endPos)
    if @model.get(attribute)? and $(".tabs a[ref=#{attribute}]").length is 0
      value = if _.isString(@model.get(attribute)) then @model.get(attribute) else JSON.stringify(@model.get(attribute),null,2)
      data = {name: attribute, value: value}
      @renderAttribute(data)
        
  toggleSource: (e) =>
    e.preventDefault()    
    $a = $(e.currentTarget)
    current = $a.attr("ref")    
    @$el.find('textarea').addClass('hidden')
    @$el.find("textarea[name=#{current}]").removeClass("hidden")
    @$el.find(".tabs a").removeClass("is-active")
    $a.addClass("is-active")
    
  
  renderAttribute: (data) =>   

    @$el.find(".tabs").append $(@tabTmpl(data))
    @$el.find(".textareas").append $(@textareaTmpl(data))
    $textarea = @$el.find("textarea[name=#{data.name}]")
    new Behave(
      textarea: $textarea[0],
      replaceTab: true
      softTabs: true
      tabSize: 2
      autoOpen: true
      overwrite: true
      autoStrip: true
      autoIndent: true
      fence: true
    )
    @delegateEvents()
    @$el.find(".tabs a[ref=#{data.name}]").click()
    if @$el.find("textarea").length > 1 
      unless @$el.find("textarea")[0].hasAttribute("disabled")
        $textarea.removeAttr("disabled")
    $textarea 
  
app.views.JsonForm = JsonForm