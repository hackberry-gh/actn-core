require 'goliath/api'
require 'actn/db/set'
require 'actn/api/client'
require 'actn/api/mw/auth'
require 'actn/api/mw/cors'
require 'actn/api/mw/no_xss'
require 'actn/api/goliath/validator'
require 'actn/api/goliath/params'

module Actn
  module Api
    class Cors < Goliath::API
    
      CT_JS = { 'Content-Type' => 'application/javascript' }
      CT_JSON = {'Content-Type' => 'application/json'}
          
          
      def self.inherited base
        
        super
        
        base.use Goliath::Rack::Params
        base.use Goliath::Rack::Heartbeat

        base.use Mw::NoXSS
        base.use Rack::Session::Cookie, secret: ENV['SECRET']
        base.use Rack::Csrf, skip: ['OPTIONS:/.*'], skip_if: proc { |r| ENV['RACK_ENV'] == "test" }
        base.use Mw::Cors
        base.use Goliath::Rack::BarrierAroundwareFactory, Mw::Auth, exclude: /^\/connect$/
        
        super
      end

  
      def process table, path
        raise NotImplementedError
      end
      
      

      def response env

        path = env['REQUEST_PATH'] || "/"

        unless table = path[1..-1].split("/").first
          raise Goliath::Validation::Error.new(400, "model identifier missing")
        end
  
        begin
          json = process(table,path)
        rescue PG::InternalError => e
          if e.message =~ /does not exist/
            raise Goliath::Validation::NotFoundError.new("resource not found")        
          else
            raise e
          end
        end
      
        status = json =~ /errors/ ? 406 : 200

        [status, CT_JSON, json]

      end
      
      private
      
      def limit
        query['limit'] || 50
      end
      
      def page
        ((query['page'] || 1).to_i - 1)
      end

      def offset
        limit * page
      end
      
      def query
        params['query']
      end
      
      def data
        params['data']
      end      
  
    end
  end
end