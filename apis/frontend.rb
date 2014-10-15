require 'actn/api/core'
require 'tilt/erb' 
require "goliath/rack/sprockets"

class Frontend < Actn::Api::Core
  
  settings[:public_folder]  = "#{Actn::Api.root}/public"
  settings[:views_folder]   = "#{Actn::Api.root}/views"        
  
  if ENV['RACK_ENV'] == "development"
    use Goliath::Rack::Sprockets, asset_paths: ["assets/javascripts", "assets/stylesheets", "assets/webfonts"]
  else  
    use Rack::Static, :root => "#{Actn::Api.root}/public", :urls => ['favicon.ico','/assets']
  end
      
  helpers do

    def current_user
      env['current_user'] ||= User.find(session[:user_uuid]) if session[:user_uuid]
    end
    
    def signin
      session[:user_uuid] = User.find_for_auth(data['user'])
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