require 'tilt/erb'
require 'helmet/templates'
require 'actn/api/template'
# require 'tilt/mustache'

Helmet::Templates.module_eval do
  
  alias_method :find_file_template, :find_template
  
  private
  
  def find_template(engine, template)
    filename = "#{template.to_s}.#{engine.to_s}"
    tmpl = Actn::Api::Template.find_by({filename: filename})
    return find_file_template(engine,template) unless tmpl
    tmpl.path
  end
  
end