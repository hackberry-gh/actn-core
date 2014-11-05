#=require ../models/client

class Clients extends Backbone.Collection
  name: "clients"
  model: app.models.Client
  url: "/api/core/clients"
  query: {select: ["uuid,domain"]}
  comparator: "domain"

app.collections.Clients = Clients