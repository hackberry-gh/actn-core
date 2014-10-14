#=require ../models/template

class Templates extends Backbone.Collection
  name: "templates"
  model: app.models.Template
  url: "/api/templates"
  query: {select: "uuid,filename"}

app.collections.Templates = Templates