require 'minitest_helper'
require 'goliath/test_helper'
require 'apis/backend'

require 'actn/api/client'
require 'actn/api/user'
require 'actn/jobs/job'
require 'actn/db/model'


module Actn
  module Api
    class TestBackend < MiniTest::Test
      
      include Goliath::TestHelper

      def setup
        @model = Actn::DB::Model.create(name: "papa")
        
        @api_options = { :verbose => true, :log_stdout => true, config: "#{Actn::Api.gem_root}/config/core.rb" }
        @err = Proc.new { assert false, "API request failed" }
    
        @client = Client.create({domain: "localhost:9900"})
        @headrw = { 'X_APIKEY' => @client.credentials['apikey'], 'X_SECRET' => @client.credentials['secret'] }
      end
  
      def teardown
        @model.destroy
        Actn::DB::Model.delete_all
        @client.destroy
      end

      def test_index
        with_api(Backend,@api_options) do
          get_request({path: '/models', head: @headrw }, @err) do |c|
            assert_equal 200, c.response_header.status
            assert_match /Papa/, c.response
          end
        end
      end

      def test_show
        with_api(Backend,@api_options) do
          get_request({path: "/models/#{@model.uuid}", head: @headrw }, @err) do |c|
            assert_equal 200, c.response_header.status
            assert_match /Papa/, c.response
          end
        end
      end
      
      def test_create
        with_api(Backend,@api_options) do
          post_request({path: "/models", head: @headrw, body: {name: "bobo"} }, @err) do |c|
            assert_equal 200, c.response_header.status
            assert_match /Bobo/, c.response
          end
        end
      end
      
      def test_update
        with_api(Backend,@api_options) do
          put_request({path: "/models/#{@model.uuid}", head: @headrw, body: {city: "London"} }, @err) do |c|
            assert_equal 200, c.response_header.status
            assert_match /London/, c.response
          end
        end
      end
      
      def test_destroy
        with_api(Backend,@api_options) do
          model = Actn::DB::Model.create(name: "destroyme")          
          delete_request({path: "/models/#{model.uuid}", head: @headrw }, @err) do |c|
            assert_equal 200, c.response_header.status
            assert_match /Destroyme/ , c.response
          end
        end
      end      
      
    end
  end
end