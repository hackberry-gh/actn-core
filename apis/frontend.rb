require 'actn/api/core'
require 'tilt/erb' 
require "goliath/rack/sprockets"

require 'helmet'
require 'rack/csrf'
require 'actn/db'
require 'actn/api/user'
require 'actn/api/mw/auth'
require 'actn/api/mw/no_xss'
require 'actn/api/goliath/validator'
require 'actn/api/goliath/params'


# require 'helmet'
# require 'rack/csrf'
# require 'actn/db'
# require 'actn/api/user'
# require 'actn/api/mw/auth'
# require 'actn/api/mw/no_xss'
# require 'actn/api/goliath/validator'
# require 'actn/api/goliath/params'

Actn::Api::Core.class_eval
  def self.inherited base

    base.init
  
    super

    base.use Goliath::Rack::Params
    base.use Goliath::Rack::Heartbeat

    base.use Mw::NoXSS
    base.use Rack::Session::Cookie, secret: ENV['SECRET']
    # base.use Rack::Csrf, skip_if: proc { |request|
    #   request.env.key?('HTTP_X_APIKEY') && request.env.key?('HTTP_X_SECRET')
    # }
  
  end
end

class Frontend < Actn::Api::Core
  
  settings[:public_folder]  = "#{Actn::Api.root}/public"
  settings[:views_folder]   = "#{Actn::Api.root}/views"        
  
  if Goliath.env == :development
    use Goliath::Rack::Sprockets, asset_paths: ["assets/javascripts", "assets/stylesheets", "assets/webfonts"]
  else  
    use Rack::Static, :root => "#{Actn::Api.root}/public", :urls => ['favicon.ico','/assets']
  end
      
  helpers do

    def current_user
      env['current_user'] ||= User.find(session[:user_uuid]) if session[:user_uuid]
    end
    
    def signin
      env.logger.info "SIGNIN - DATA USER #{data['user']}"
      session[:user_uuid] = User.find_for_auth(data['user'])
      env.logger.info "SIGNIN - SESSION #{session[:user_uuid]}"
      session[:user_uuid]
    end
    
    def signout
      session[:user_uuid] = nil
    end
    
    def query
      params['query']
    end
  
    def data
      params['data']
    end 
    
    def csrf_tag
      Rack::Csrf.tag(env)
    end
    
    def csrf_meta_tag
      Rack::Csrf.metatag(env, options = {})
    end
    
    def xhr?
      env['HTTP_X_REQUESTED_WITH'] == "XMLHttpRequest"
    end
    
  end
  
  before "/*" do
    unless env['REQUEST_PATH'] =~ /signin/
      redirect "/signin" unless current_user
    else
      redirect "/" if current_user  
    end
  end
  
  post "/signin" do
    content_type :json
    raise Goliath::Validation::Error.new(401,"Unauthorized") unless signin 
    Oj.dump({location: "/"})
  end
  
  delete "/signout" do
    content_type :json
    signout 
    Oj.dump({location: "/signin"})
  end
  
  get "/*" do
    content_type :html
    erb :app
  end
  
end