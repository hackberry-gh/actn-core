#= require ../../vendor/stream_table
#= require ./page
#= require ./c3/line_live

class Live extends app.views.Page
  
  initialize: (@options=null) ->
    super
    
    @start() if "WebSocket" of window

  events:
    "click .filter" : "filter"
    "click .td-content" : "showContent"    
    "click .delete" : "deleteRecord"
    "click .edit" : "editRecord"    
    "click .d3" : "openChart"
    "click .tbl" : "openTable"    
  
  rowTemplate: (msg, index) =>
    
    for field in @st.opts.fields
      if field.indexOf("data") > -1
        _key = field.replace("data.","")
        unless msg.data[_key]
          msg.data[_key] ?= ""
        # if _.isObject(msg.data[_key])
        #   msg.data[_key] = JSON.stringify(msg.data[_key])
    
    values = _.map(_.keys(msg.data).sort(),(k)->msg.data[k]) #_.values(msg.data)

    app.getTemplate("row")({index: index, msg: msg, values: values })
      
  start:  ->

    ws = new WebSocket("ws://#{window.location.host}")
    ws.onmessage = @process

    ws.onclose = ->
      console.log "socket closed"

    ws.onopen = ->
      console.log "connected..."
    
    @buffer = []  
    @table_names = []
    @bufferTimer = setInterval(@setBuffer, 2000)
    

    options = 
      view: @rowTemplate
      search_box: "#searchbox"
      fields: ["table_name"]
      pagination: 
        # container: '#pagination'
        span: 5               
        next_text: 'Next &rarr;'
        prev_text: '&larr; Previous'
        # container_class: '.users-pagination'
        # ul_class: '.larger-pagination'
        per_page_select: true,                 
        per_page_opts: [10, 25, 50],           
        # per_page_class: '.st_per_page'
        per_page: 10
      callbacks:
        before_add: @updateFields
        after_add: @updateCountAndChart
                                   
    @$el.find('.table').stream_table(options, [])
    @st = @$el.find('.table').data('st')
    @st.has_sorting = true
    @st.records_index = []          
    @st.sorting_opts = {}
    @$el.find(".st_per_page").insertAfter @$el.find("#searchbox")
    @createLabels()
    #@delegateEvents()
    @

  remove: ->
    clearInterval(@bufferTimer)
    super()  
    @
  
  filter: (e) ->
    e.preventDefault()
    $(e.currentTarget).toggleClass("active").toggleClass("bg-mid-gray").toggleClass("bg-red")
    field = e.currentTarget.text
    col = @$el.find(".table thead tr .#{field}").index() + 1
    css = ".table thead tr th.#{field}, .table tbody td:nth-child(#{col}) { display:none }"
    if $("style##{field}").length > 0
      $("style##{field}").remove()
    else
      $('html > head').append($("""<style id="#{field}" type="text/css">#{css}</style>"""))
  
  showContent: (e) ->
    app.flash e.currentTarget.innerText, "bg-lighter-gray"
    # console.log e
    # $(".flash").first().css({"left":"#{e.clientX}px","top":"#{e.clientY}px","z-index":$(".flash").length})
  
  updateCountAndChart: (msgs) =>
    @$el.find(".record_count").text("#{parseInt(@$el.find(".record_count").text()) + msgs.length} records")
    if app.views.chart?
      update = _.map( _.groupBy(msgs, (m) -> m.table_name), (arr,table) -> [ table, arr.length ] )
      update.unshift ["x", new Date()]
      app.views.chart.flow(update) 
      
  updateFields: (msgs) =>
    unless _.isEmpty(msgs)
      # for msg in msgs
      #   delete msg.data.created_at
      #   delete msg.data.updated_at
      #@table_names = _.union(_.uniq(_.pluck(msg,"table_name")),@table_names)
      fields = _.uniq(_.flatten(_.map(_.pluck(msgs,"data"),( (d) -> _.map(_.keys(d),(k)->"data.#{k}") ) )))
      unifields = _.union(@fields,fields) #@table_names  
      # console.log "fields", fields, "unifields", unifields, "msg", msg
      @st.opts.fields = unifields
      @createLabels()
      @createTableHeader()
    msgs  
  
  createTableHeader: () =>
    fields = @st.opts.fields.sort()
    fields.unshift("index","table_name")
    @$el.find('.table thead tr').html _.map(fields,(f) => 
      fname = f.replace("data.","")
      if f.indexOf("data") > -1
        sort_type = if _.isNumber(@buffer[0]['data'][fname]) then "number" else "string"
        """<th class="#{fname} sort" data-sort="#{fname}:asc:#{sort_type}">#{fname.titleize()} <i class="fa fa-sort"></i></th>"""
      else  
        """<th class="#{fname}">#{fname.titleize()}</th>"""
    ) + """<th class="actions"></th>"""
    @st.bindSortingEvents()  
  
  createLabels: =>
    filterBtns = @$el.find(".filters a")
    if filterBtns.length > 0
      filters = _.omit(_.map( filterBtns , (a) -> $(a).text() ),"table_name")
      filters = _.difference(@st.opts.fields,_.map(filters,(f)->"data.#{f}"))
    else
      filters = @st.opts.fields
    @$el.find('.filters').append _.map(filters.sort(),(f)->"""<a class="filter h5 inline-block button button-small white bg-red rounded active ml1">#{f.replace("data.","")}</a>""")
    
    
  setBuffer: =>
    unless _.isEmpty(@buffer)
      @st.addData @buffer 
      @buffer = []
  
  deleteRecord: (e) =>
    e.preventDefault()
    $a =  $(e.currentTarget)
    if window.confirm "Are you sure?"
      app.api.delete("/api/public/#{$a.data('table_name')}/#{$a.data('uuid')}", null, null, ((data) -> $a.parents("tr").remove()), app.showAlertErrors)

  editRecord: (e) =>
    e.preventDefault()
    $a =  $(e.currentTarget)
    if @updatingRecord = _.findWhere(@st.data,(r) -> r.table_name is $a.data('table_name') and r.data.uuid is $a.data('uuid') )
      jsonForm = new app.views.JsonForm(table_name: @updatingRecord.table_name, model: new Backbone.Model(@updatingRecord.data))
      jsonForm.save = @updateRecord
      app.flash """<h4>Editing /#{$a.data('table_name')}/#{$a.data('uuid')}</h4>""", "record-editor bg-dark-gray white"
      jsonForm.render().$el.insertAfter $(".record-editor h4")
      jsonForm.$el.find("textarea").removeAttr("disabled")

      
  updateRecord: (params) =>
    if params
      app.api.put("/api/public/#{@updatingRecord.table_name}/#{@updatingRecord.data.uuid}", params, null, ((data) -> $('.record-editor').find(".close").click()), app.showAlertErrors)  
          
  process: (evt) =>

    msg = if _.isString(evt.data) then JSON.parse(evt.data) else evt.data      
    
    return unless msg.table_name?
      
    if msg.op is "INSERT"
      for k,v of msg.data
        if _.isObject(v)
          msg.data[k] = JSON.stringify(v)
      @buffer.push msg
      # @st.addData [msg]
    else
      $("tr.#{msg.data.uuid}").remove()  
  
  openTable: ->
    app.views.chart?.remove()    
    @$el.find(".table, .st_pagination").removeClass("hidden")
  
  openChart: (e) ->
    e.preventDefault()
    ns = $(e.currentTarget).data('ns')
    name = $(e.currentTarget).data('name')    
    app.views.chart?.remove()
    app.views.chart = new app.views[ns][name](data: [])
    @$el.find(".table, .st_pagination").addClass("hidden")
    @$el.find(".table-container").append(app.views.chart.$el)    
    app.views.chart.draw()
    
app.views.Live = Live