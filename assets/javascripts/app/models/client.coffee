class Client extends Backbone.Model
  name: "client"
  
  urlRoot: "/api/core/clients"
  
  idAttribute: "uuid"
  
  parse: ->
    json = super
    json.name = json.domain
    json
  
  validate: (attrs, options) ->
    errors = app.jjv.validate(Client.schema,attrs)
    if errors
      delete errors.validation.apikey
      delete errors.validation.secret_hash
      return if _.isEmpty(errors.validation) 
    errors
    
  meta: ->
    if @get("uuid")
      JSON.stringify(@pick('domain','acl','apikey','credentials'),null,2)
    else  
      JSON.stringify(_.omit(Client.schema.properties,'uuid','apikey','secret_hash','sessions'),null,2)

    
  toJSON: (options) ->
    json = super
    _.pick(json,'uuid','domain','acl')
  
app.models.Client = Client