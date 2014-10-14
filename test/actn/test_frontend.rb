require 'minitest_helper'
require 'goliath/test_helper'
require 'apis/frontend'
require 'actn/api/client'
require 'actn/api/user'
require 'actn/jobs/job'
require 'actn/db/model'
require 'actn/db'

module Actn
  module Api
    class TestFrontend < MiniTest::Test
      
      include Goliath::TestHelper
      
      def setup
        
        @api_options = { :verbose => true, :log_stdout => true, config: "#{Actn::Api.gem_root}/config/core.rb" }
        @err = Proc.new { assert false, "API request failed" }
      end

      def test_front_api
        with_api(Frontend,@api_options) do
          get_request({path: '/' }, @err) do |c|
            assert_equal 200, c.response_header.status
          end
        end
      end
      
    end
  end
end