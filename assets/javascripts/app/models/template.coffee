class Template extends Backbone.Model
  name: "model"
  
  urlRoot: "/api/core/templates"
  
  idAttribute: "uuid"
  
  parse: ->
    json = super
    json.name = json.filename
    json
      
  validate: (attrs, options) ->
    app.jjv.validate(Template.schema,attrs) 
  
  meta: ->
    if @get("uuid")
      JSON.stringify(@pick('filename','layout','body','data_bind'),null,2)
    else  
      JSON.stringify(_.omit(Template?.schema?.properties,'uuid'),null,2)
    
  toJSON: (options) ->
    json = super
    _.pick(json,'uuid','filename','body','layout','data_bind')
  
app.models.Template = Template