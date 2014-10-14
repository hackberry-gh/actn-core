#=require ../models/client

class Clients extends Backbone.Collection
  name: "clients"
  model: app.models.Client
  url: "/api/clients"
  query: {select: "uuid,domain"}

app.collections.Clients = Clients