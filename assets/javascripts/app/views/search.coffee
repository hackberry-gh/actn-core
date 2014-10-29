#= require ../../vendor/stream_table
#= require ./live

class Search extends app.views.Live
  
  events:
    "click .filter" : "filter"
    "click .td-content" : "showContent"
    "keydown #searcharea textarea": "onSearchAreaKeydown"
    "click .help" : "toggleHelp"
    "click .bar-chart" : "openD3"
  
  initialize: (@options=null) ->
    super
    @start() unless "WebSocket" of window
  
  start:  ->
    
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
        after_add: @updateCount
                                   
    @$el.find('.table').stream_table(options, [])
    @$el.find('#searchbox').attr('placeholder','Filter')
    
    searchareaEl = @$el.find("#searcharea textarea")
    @editor = new Behave(
      textarea: searchareaEl[0],
      replaceTab: true
      softTabs: true
      tabSize: 2
      autoOpen: true
      overwrite: true
      autoStrip: true
      autoIndent: true
      fence: true
    )
    searchareaEl.autosize()
    @st = @$el.find('.table').data('st')
    @st.has_sorting = true
    @st.records_index = []          
    @st.sorting_opts = {}
    @$el.find(".st_per_page").insertAfter @$el.find("#searchbox")
    @createLabels()
    #@delegateEvents()
    @   
  
  onSearchAreaKeydown: (e) ->
    # console.log e
    if (e.ctrlKey or e.metaKey) and e.keyCode is 83
      e.preventDefault()
      @search(e.shiftKey)
    @
  
  search: (reset=false) ->
    if query = @$el.find("#searcharea textarea").val()  
      if reset
        @$el.find('.table tbody').empty()
        @$el.find('.table thead').html("<tr>")      
        @$el.find(".record_count").text("0 records")
        @st.data=[]
        @st.current_page = 0
        @st.last_search_result = []
        @st.last_search_text = ""
        @st.text_index = []
        @st.records_index = []      
        @st.sorting_options = {}      
        @st.opts.fields = ['table_name']
        @st.renderPagination()
      
    
      try
        @query = JSON.parse(query)
        @query.query ?= {}
        @query.query.table_schema ?= "public"
        @query.query.stream = "true"    
        app.api.getStream("/api/#{@query.table_name}",@query.query,null,@onSearchResult,@onError)        
      catch error
        app.flash error, "red"
        

  
  onSearchResult: (data) =>
    return if _.isEmpty data

    data = _.map(_.flatten(data),(row) => {table_name: @query.table_name, data: row, op: "INSERT"})
    # console.log data
    for msg in data
      for k,v of msg.data
        if _.isObject(v)
          msg.data[k] = JSON.stringify(v)
      # console.log msg   
      @buffer.push msg
      
  onError: (err) ->
    app.flash err, "red" 
    
  toggleHelp: ->
    app.flash app.getTemplate('help')({}, [])
  
  openD3: ->
    if @st.data? and not _.isEmpty(@st.data)
      @d3 = new app.views.D3(data: @st.data)
        
app.views.Search = Search