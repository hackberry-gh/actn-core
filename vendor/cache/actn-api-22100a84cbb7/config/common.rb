require 'oj'
require 'i18n'

require 'actn/api/client'
require 'actn/api/user'
require 'actn/api/template'
require 'actn/db/model'
require 'actn/jobs/job'
require 'actn/paths'

Oj.default_options = { time_format: :ruby, mode: :compat }
I18n.enforce_available_locales = false

::Client = Actn::Api::Client unless Object.const_defined? "Client"
::User   = Actn::Api::User   unless Object.const_defined? "User" 
::Template = Actn::Api::Template   unless Object.const_defined? "Template"
::Model  = Actn::DB::Model   unless Object.const_defined? "Model"
::Job    = Actn::Jobs::Job   unless Object.const_defined? "Job"

if respond_to? :config
  config[:template] = {
   :views => "#{Actn::Api.root}/views",
  }
end