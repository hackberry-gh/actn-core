class C3ColumnSelector extends Backbone.View
  
  el: ".filters"
  
  events:
    # "click .filter": "setColumn"
    "click .draw": "draw"    
    "click .cancel": "cancel"    
  
  initialize: (@options) ->
    @chartView = @options.chartView
    @$background = $("<div class=\"c3-column-selector-bg shrink bg-darken-4 absolute top-0\">")
    @$tableNameFilterBtn = @$el.find(".filter:first-child")          
    @$activeFiltersStash = @$el.find(".filter.active")    
      
  template: ->
    app.getTemplate('c3_column_selector')()
  
  render: ->
    @$tableNameFilterBtn.addClass("hidden")
    @$el.find(".filter.active").removeClass("active").removeClass("bg-red").addClass("bg-mid-gray")
    @$background.insertBefore @$el  
    @$el.append(@template())
    #@delegateEvents()
    @$el.find(".filter").not(".draw").not(".cancel").on "click", @setColumn
    @
    
  remove: ->        
    @$el.find(".filter").not(".draw").not(".cancel").off "click", @setColumn      
    @$background.remove()
    @$el.find("input.map").parent().remove()
    @$el.find("a.cancel").remove()
    @$el.find("a.draw").remove()

    @$tableNameFilterBtn.removeClass("hidden")    
    @$activeFiltersStash.addClass("active").addClass("bg-red").removeClass("bg-mid-gray")
    @stopListening();
    @
  
  setColumn: (e) =>
    e.preventDefault()
    e.stopPropagation()
    name = e.currentTarget.text
    $a = $(e.currentTarget)
    $a.toggleClass("active").toggleClass("bg-red").toggleClass("bg-mid-gray")
    if $a.hasClass("active")
      @chartView.columns.push name 
    else
      @chartView.columns = _.without(@chartView.columns, name)

  cancel: (e) ->
    e.preventDefault()
    e.stopPropagation()
    app.view.openTable()
  
  draw: (e) ->   
    e.preventDefault()
    e.stopPropagation()
    @chartView.draw()
    
  mapEnabled: ->
    @$el.find("input.map").is(":checked")
  
app.views.C3ColumnSelector = C3ColumnSelector