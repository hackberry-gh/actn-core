require 'tilt/erb' 
require 'helmet'
require 'actn/api/helmet/templates'

module Actn
  module Api
    class UI < Helmet::API
  
      
      def self.inherited base

        base.init

        base.use Goliath::Rack::DefaultMimeType        
        base.use Goliath::Rack::Render
        
        super
        
      end
          
    end
  end
end