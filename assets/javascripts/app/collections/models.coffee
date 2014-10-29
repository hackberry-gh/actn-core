#=require ../models/model

class Models extends Backbone.Collection
  name: "models"
  model: app.models.Model
  url: "/api/models"
  query: {select: ["uuid,name"],where:{table_schema: "public"}}

app.collections.Models = Models