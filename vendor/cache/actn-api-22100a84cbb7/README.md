# Actn::Api

Actn.io Core & Cors APIs

## Installation

Add this line to your application's Gemfile:

    gem 'actn-api'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install actn-api

## Usage


### Core Api
 
**HEADERS**

Origin: 
X_APIKEY: 
X_SECRET: 
Content-Type: application/json"
     
**POST /:set**

creates record on set
  
**GET /:set**

fetches all/scoped records
params where, select, page, limit 

**GET /:set/:id**

fetches record with given id

**PUT /:set/:id**

updates record

**DELETE /:set/:id**

destroy record

### Models

name,[table_schema,schema,indexes,hooks]


``` 
curl \
    -H "Origin: http://localhost:5000" \
    -H "X_APIKEY: 2b2efa40a38c6091de9aad0e42432559" \
    -H "X_SECRET: d2bd70f91b102d8897019834f8ff6e18" \
    -H "Content-Type: application/json" \
    -d '{"name":"ModelName","schema":{"title":"Model Name","type":"object","properties":{"first_name":{"type":"string"},"last_name":{"type":"string"},"age":{"description":"Age in years","type":"integer","minimum":0}},"required":["first_name","last_name"]},"indexes":[{"cols":{"apikey":"text"},"unique":true}],"hooks":{"after_create":[{"name":"Trace","run_at":"Time.now + 2 # 2 seconds later"},{"name":"Trace"}]}}' \
    -X POST "http://core.lvh.me:5000/api/models"
```     

### Clients

domain

### User

first_name, last_name, email, password, password_confirmation, [phone]



### JSON Api

First you need to load js client
```
<script id="actn" src="http://api.YOUR_DOMAIN.actn.io/client?apikey=YOUR_API_KEY"></script>
```

Then you can use cors api via js client

```
actn.post({
  path: "/:set(/:anything/:can/:go/:after/:set)",
  data: {"name": "hello"}, 
  success: function(data){},
  error: function(errors){}  
})
actn.get({
  path: "/:set(/:anything/:can/:go/:after/:set)",
  data: {
    select: 'field,names',
    where:{
      not: { active: true }, 
      or: { age: { ">": 20, "<": 50} }, 
      name: [ "!=", "Igor" ],
      name: "Bonzo"
    },
    order_by: "age",
  }, 
  success: function(data){},
  error: function(errors){}  
})
actn.put({
  path: "/:set(/:anything/:can/:go/:after/:set)",
  data: {"uuid": "uuid-12345", "name": "hello"}, 
  success: function(data){},
  error: function(errors){}  
})
actn.delete({
  path: "/:set(/:anything/:can/:go/:after/:set)",
  data: {"uuid": "uuid-12345"}, 
  success: function(data){},
  error: function(errors){}  
})

options = 
```

## Contributing

1. Fork it ( http://github.com/<my-github-username>/actn-api/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
