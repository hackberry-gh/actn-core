class Model extends Backbone.Model
  name: "model"
  
  urlRoot: "/api/core/models"
  
  idAttribute: "uuid"
    
  validate: (attrs, options) ->
    errors = app.jjv.validate(Model.schema,attrs)
    if errors
      delete errors.validation.table_schema
      return if _.isEmpty(errors.validation) 
    errors    
  
  meta: ->
    if @get("uuid")
      JSON.stringify(@pick('name','schema','indexes','hooks'),null,2)
    else  
      JSON.stringify(_.omit(Model?.schema?.properties,'uuid'),null,2)
    
  toJSON: (options) ->
    json = super
    json = _.pick(json,'uuid','name','schema','indexes','hooks')
    json['table_schema'] = "public"
    json
  
app.models.Model = Model