require 'helmet'
require 'rack/csrf'
require 'actn/db'
require 'actn/api/user'
require 'actn/api/mw/auth'
require 'actn/api/mw/no_xss'
require 'actn/api/goliath/validator'
require 'actn/api/goliath/params'

module Actn
  module Api
    class Core < Helmet::API
  
      OK = '{"success": true}'
      
      def self.inherited base

        base.init
        
        super

        base.use Goliath::Rack::Params
        base.use Goliath::Rack::Heartbeat

        base.use Mw::NoXSS
        base.use Rack::Session::Cookie, secret: ENV['SECRET']
        base.use Rack::Csrf, skip_if: proc { |request| 
          request.env.key?('HTTP_X_APIKEY') && request.env.key?('HTTP_X_SECRET') 
        }
        
      end
          
    end

  end
end