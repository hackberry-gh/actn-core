Disclosure = (el, options) ->
  self = this
  @el = el
  @isActive = false
  @toggle = (e) ->
    e.stopPropagation()
    self.isActive = not self.isActive
    if self.isActive
      self.el.classList.add "is-active"
    else
      self.el.classList.remove "is-active"
    return

  @el.addEventListener "click", (e) ->
    self.toggle e
    return

  return