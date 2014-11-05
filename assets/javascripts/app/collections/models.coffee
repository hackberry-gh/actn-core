#=require ../models/model

class Models extends Backbone.Collection
  name: "models"
  model: app.models.Model
  url: "/api/core/models"
  query: {select: ["uuid,name"],where:{table_schema: "public"}}
  comparator: "name"

app.collections.Models = Models