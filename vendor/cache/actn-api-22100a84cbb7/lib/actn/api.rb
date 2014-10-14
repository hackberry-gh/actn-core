require "actn/paths"
require "actn/db"
require "actn/api/version"
      
module Actn
  module Api
    include Paths
    
    def self.gem_root
      @@gem_root ||= File.expand_path('../../../', __FILE__)
    end
    
  end
end

Actn::DB.paths << Actn::Api.gem_root