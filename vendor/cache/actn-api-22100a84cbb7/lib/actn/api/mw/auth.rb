require 'goliath/rack'
require 'goliath/validation'
require 'bcrypt'

##
# Bync.rb
# Bouncer of our midningt api club

module Actn
  module Api  
    module Mw    
      class Auth
        
        include Goliath::Rack::BarrierAroundware
        include Goliath::Validation
      
        class MissingApikeyError     < BadRequestError   ; end
        class InvalidCredentialsError  < UnauthorizedError ; end
      
        attr_accessor :client, :opts
        
        def initialize(env, opts = {})
          self.opts = opts
          super(env)
        end
      
        
        def pre_process
          
          unless excluded?
              
            validate_apikey! 

            # On non-GET non-HEAD requests, we have to check auth now.
            unless lazy_authorization?
              perform     # yield execution until user_info has arrived
              authorize_client!
            end
          
          end
          
          return Goliath::Connection::AsyncResponse
        end
      
        def post_process
          
          unless excluded?
              
            # We have to check auth now, we skipped it before
            if lazy_authorization?
              validate_client!
            end

          end
        
          [status, headers, body]
        end

        def lazy_authorization?
          (env['REQUEST_METHOD'] == 'GET') || (env['REQUEST_METHOD'] == 'HEAD')
        end

        def validate_apikey!
          return true if with_session? && current_user_uuid
          raise MissingApikeyError.new("Missing Api Key") if apikey.to_s.empty?
        end
        
        def validate_client!          
          return true if with_session? && current_user_uuid          
          raise Goliath::Validation::UnauthorizedError unless client_valid?
        end

        def authorize_client!
          return true if with_session? && current_user_uuid          
          unless client_valid? && client_authorized?
            raise InvalidCredentialsError.new("Invalid Credentials")
          end
          env['rack.session'][:user_uuid] = self.client.uuid
        end

        def apikey
          env['HTTP_X_APIKEY']
        end
        
        def secret
          env['HTTP_X_SECRET']
        end        
        
        def client_valid?
          self.client = Client.find_for_auth(host, apikey)
        end
      
        def client_authorized?
          return unless self.client
          (
          self.secret.nil? ? 
          self.client.auth_by_session(env['rack.session'].id) : 
          self.client.auth_by_secret(self.secret)
          ) && self.client.can?("#{env['REQUEST_METHOD']}:#{env['REQUEST_PATH']}")
        end
        
        def host
          (env['HTTP_ORIGIN'] || env['HTTP_HOST']).to_domain
        end
        
        def excluded?
          opts[:exclude].nil? ? false : (env['REQUEST_PATH'] =~ opts[:exclude])
        end  
        
        def with_session?
          opts[:with_session]
        end      
        
        def current_user_uuid
          env['rack.session'][:user_uuid]
        end

      
      end
    end
  end
end