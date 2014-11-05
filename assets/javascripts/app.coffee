# Backbone needs this to work with mustache
Mustache.template = (temp) ->
  () ->
    return temp if arguments.length < 1
    Mustache.parse temp
    Mustache.render(temp, arguments[0], arguments[1])
    

        
class App
  
  @YAML_INL: 124
  
  @YAML_IND: 2
  
  $body: $("body")  

  @STANDARD_ERR: "Ops!, sorry something went wrong!"
  
  views: {}
    
  collections: {}
  
  models: {}
  
  templates: {}     
  
  # callbacks:
  #   redirect: (data) ->
  #     window.location.href = data.location
  #     return
  
  jjv: new jjv()
      
  getTemplate: (id) ->
    # disable cache for dev
    # app.templates[id] ||= Mustache.template($("#mst_#{id}").html())
     Mustache.template($("#mst_#{id}").html())      
  
  start: ->
    delegateEventHandlers()
    Backbone.history.start(pushState: true)
    
  postRender: ->
    setMenuItemActive()
    delegateEventHandlers()
  
  activeMeniItems = []
  
  setMenuItemActive = ->
    for i of app.activeMeniItems  
      if className = app.activeMeniItems[i]
        n = parseInt(i) + 1
        $(".flex-#{n} .sidebar-nav a.is-active").removeClass "is-active"
        $(".flex-#{n} .sidebar-nav a.#{className}").addClass "is-active"

  flash: (content, classNames="", timeout = null) ->
    classNames = "bg-white #{classNames}" if classNames.indexOf("bg-") is -1
    new app.views.Flash({data: {content: content, classNames: classNames}, timeout: timeout})     

    
  showAlertErrors: (xhr) ->
    errors = JSON.parse(xhr.responseText).data
    messages = []
    
    switch xhr.status
      when 406
        for field of errors
          messages.push "#{field} #{errors[field].join(',')}"
      when 401
        messages.push """You need to <a href="/signin">singin</a> before"""
      else
        messages.push app.constructor.STANDARD_ERR
    
    app.flash messages.join('<br/>'), "red"    
  
  showInlineErrors: ($form, xhr) ->
    errors = JSON.parse(xhr.responseText).data
    $errEl = $('<small class="error-msg block red mb2"/>')
    
    $form.find(".error-msg").remove()
    $form.find(".is-error").removeClass ".is-error"
    
    switch xhr.status
      when 406
        for field of errors
          $error = $errEl.clone().text( errors[field].join(",") )
          $error.insertAfter $form.find(".#{field}").addClass("is-error")
      when 401
        $error = $errEl.clone().html( "Please check your email and password." )
        $error.insertAfter $form.find("input[type=email]").addClass("is-error")
      else
        app.flash app.constructor.STANDARD_ERR, "bg-red white"
    
  ##
  # private
    
  delegateEventHandlers = ->
    $("[data-disclosure]").click (e) ->
      e.stopPropagation()
      $(e.currentTarget).toggleClass("is-active")
      
    $("a[data-method]").click (e) ->      
      e.preventDefault()
      e.stopImmediatePropagation()
      $a = $(this)
      app.api.request 
        method: $a.data("method")
        path: $a.attr("href")
    
    $("a[href^=\"/\"]").click (e) ->
      e.preventDefault()
      app.router.navigate $(this).attr("href"), trigger: true
          
    $("form[data-remote]").submit (e) ->
      e.preventDefault()
      $form = $(this)
      app.api.request 
        method: $form.attr("method")
        
        path: $form.attr("action")
        
        data: (if $form.data("data") then $form.data("data") else $form.serializeJSON())
        
        before: (xhr) -> 
          $form.find(".submit").addClass "disabled" 
        
        # success: (data) ->
        #   if _.isFunc app.callbacks[$form.data("callback")]
        #     app.callbacks[$form.data("callback")] data
          
        error: (xhr) -> 
          if $form.data("error") is "alert"
            app.showAlertErrors xhr
          else
            app.showInlineErrors $form, xhr

        after: (xhr) -> 
          $form.find(".submit").removeClass "disabled"

window.app = new App