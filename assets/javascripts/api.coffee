class Api
  
  constructor: () ->
    $.ajaxSetup
      beforeSend: setCsrf
      xhrFields:
        withCredentials: true
  
  # path, data = {}, before, success, error, after
  getStream: (args...) ->
    @stream params("GET", args...)
    
  get: (args...) ->
    @request params("GET", args...)
  
  post: (args...) ->
    @request params("POST", args...)

  put: (args...) ->
    @request params("PUT", args...)

  delete: (args...) ->
    @request params("DELETE", args...)
    
  stream: (params) ->
    $.ajax
      url: params.path
      type: params.method
      data: params.data
      dataType: "json"
      # progress:(e) ->
      #   console.log "standard progress callback", e
      xhr: ->
        xhr = $.ajaxSettings.xhr()
        # xhr.addEventListener "onloadend", ((e) =>
        #   console.log "END",e
        #   chunks = e.currentTarget.responseText.split("\n")
        #   console.log chunks
        # ), false
        xhr.addEventListener "progress", ((e) =>
          
          chunks = e.currentTarget.responseText.split("\n")

          e.chunks = Api.parseStream(chunks,@chunks).reverse()
          
          @chunks = chunks
          
          # if e.lengthComputable
          #   console.log "Loaded " + parseInt((e.loaded / e.total * 100), 10) + "%"
          # else
          #   console.log "Length not computable."

          # console.log e.chunks
          if e.chunks.error
            params.error(e.chunks.error) if isFunc params.error
          else
            params.success(e.chunks) if isFunc params.success
          
          @progress 
    
        ), false
        xhr
      beforeSend: (xhr) ->
        setCsrf xhr
        params.before(xhr) if isFunc params.before

      success: (data) ->
        if data.error
          params.error(data.error) if isFunc params.error
        else  
          params.success(data) if isFunc params.success
        window.location.href = data.location if data?.location?

      # error: (xhr) ->
      #   console.log JSON.parse(xhr.responseText)
      #   params.error(xhr) if isFunc params.error
        
      complete: (xhr) ->
        params.after(xhr) if isFunc params.after
  
  request: (params) ->
    $.ajax
      url: params.path
      type: params.method
      data: params.data
      dataType: "json"
      beforeSend: (xhr) ->
        setCsrf xhr
        params.before(xhr) if isFunc params.before

      success: (data) ->
        params.success(data) if isFunc params.success        
        window.location.href = data.location if data?.location?

      error: (xhr) ->
        params.error(xhr) if isFunc params.error
        
      complete: (xhr) ->
        params.after(xhr) if isFunc params.after
    
  setCsrf = (xhr) ->
    xhr.setRequestHeader "X-CSRF-Token", $("meta[name=\"_csrf\"]").attr("content")
  
  isFunc = (obj) ->
    typeof obj is "function"
  
  params = () ->
    method: arguments[0]
    path: arguments[1]
    data: arguments[2] or {}
    before: arguments[3]
    success: arguments[4]
    error: arguments[5]
    after: arguments[6] 
  
  @parseStream: (chunks,stream = []) ->
    _.compact( _.map( _.difference(chunks,stream),( (s) -> 
      try 
        c = JSON.parse(s) 
      catch error
        null  
      finally
        if _.isObject(c) and not _.isEmpty(c)  
          return c
        else
          return null  
    )))  
  
app.api = new Api