require 'goliath/rack'
require 'rack/csrf'

##
# Cors.rb
# Cross domain middle ware


module Actn
  module Api  
    module Mw
      class Cors
      
        include Goliath::Rack::AsyncMiddleware

        def initialize(app)
          @app = app
        end

        def call(env)
          if env['REQUEST_METHOD'] == 'OPTIONS'
            [200, cors_headers(env,false), []]
          else
            super(env)
          end
        end

        def post_process(env, status, headers, body)
          headers = cors_headers(env).merge(headers)
          [status, headers, body]
        end

        private
        
        attr_accessor :options
  
        def cors_headers env, csrf = true
          headers = {}
          headers['Access-Control-Allow-Credentials'] = 'true'
          headers['Access-Control-Allow-Origin'] = env['HTTP_ORIGIN']
          headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
          headers['Access-Control-Allow-Headers'] = '*, X-Requested-With, X-Prototype-Version, X-CSRF-Token, Authorization, Origin, Accept, Content-Type, Referer'
          headers['Access-Control-Expose-Headers'] = 'X_CSRF_TOKEN, X_APIKEY'
          headers['Access-Control-Max-Age'] = "#{Client::TTL}"
          headers['P3P'] = 'CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"'
          
          headers['X_CSRF_TOKEN'] = Rack::Csrf.token(env) if csrf
          
          client_headers_to_approve = env['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'].to_s.gsub(/[^\w\-\,]+/,'') 
          headers['Access-Control-Allow-Headers'] += ",#{client_headers_to_approve}" if not client_headers_to_approve.empty?
                    
          headers
        end
      
      end
    end
  end
end