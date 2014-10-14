class Api
  
  constructor: () ->
    $.ajaxSetup
      beforeSend: setCsrf
      xhrFields:
        withCredentials: true
  
  # path, data = {}, before, success, error, after
  get: (args...) ->
    @request params("GET", args...)
  
  post: (args...) ->
    @request params("POST", args...)

  put: (args...) ->
    @request params("PUT", args...)

  delete: (args...) ->
    @request params("DELETE", args...)
  
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
    xhr.setRequestHeader "X_CSRF_TOKEN", $("meta[name=\"_csrf\"]").attr("content")
  
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
  
app.api = new Api