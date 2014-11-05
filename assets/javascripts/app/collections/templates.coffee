#=require ../models/template

class Templates extends Backbone.Collection
  name: "templates"
  model: app.models.Template
  url: "/api/core/templates"
  query: {select: ["uuid,filename"]}
  comparator: "filename"

app.collections.Templates = Templates