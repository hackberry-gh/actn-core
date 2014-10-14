Router = Backbone.Router.extend(
  routes:
    "":                       "home"
    "signin":                 "signin"
    "signout":                "signout"
    "live":                   "live"
    ":collection":            "index"
    ":collection/new":        "new"
    ":collection/:uuid/edit": "edit"
    
  signin: () ->
    app.view?.remove()
    app.view = render "Page", id: "signin"
    
  signout: () ->   
    app.api.delete "/signout"
    
  home: ->
    renderHome()   
    
  live: ->
    app.activeMeniItems = ["live", null]    
    app.view?.remove()
    app.view = render "Live", id: "live", partials: ["nav","table"]     
    
  index: (cid) ->  
    renderList(cid)
    
  'new': (cid) ->  
    renderForm(cid)

  edit: (cid, uuid) ->  
    renderForm(cid, uuid)    
  
  renderHome = ->
    app.view?.remove()    
    app.view = render "Page", id: "home", partials: ["nav"] 
  
  renderList = (cid) ->
    if app.view?.id isnt "home"
      renderHome()
    app.view?.list?.remove()
    # renderHome() unless app.view?
    app.activeMeniItems = [cid, null]
    app.collections[cid] ||= new app.collections[cid.titleize()]()
    app.view.list = render "List", collection: app.collections[cid]
  
  renderForm = (cid, uuid) ->
    app.view?.list?.form?.remove()    
    renderList(cid) unless app.view?.list?
    app.activeMeniItems = [cid, uuid or "new"]
    app.view.list.form = render "Form", collection: app.collections[cid], model: new app.models[cid.classify().toString()](uuid: uuid)
      
  render = (view, options) ->
    view = new app.views[view](options)
)

app.router = new Router