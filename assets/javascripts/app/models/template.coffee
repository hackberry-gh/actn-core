class Template extends Backbone.Model
  name: "model"
  
  urlRoot: "/api/templates"
  
  idAttribute: "uuid"
  
  parse: ->
    json = super
    json.name = json.filename
    json
      
  validate: (attrs, options) ->
    app.jjv.validate(Template.schema,attrs) 
  
  code: ->
    if @get("uuid")
      JSON.stringify(@pick('filename','body'),null,2)
    else  
      JSON.stringify(_.omit(Template?.schema?.properties,'uuid'),null,2)
    
  toJSON: (options) ->
    json = super
    _.pick(json,'uuid','filename','body')
  
app.models.Template = Template