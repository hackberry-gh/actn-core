require 'minitest_helper'
require 'actn/api/client'

module Actn
  module Api
    class TestClient < Minitest::Test
  
      def teardown
        Client.delete_all
      end
  
      def test_create
        client = Client.create(domain: "localhost:9000")
        assert client.persisted?
      end
  
      def test_auth
        client = Client.create(domain: "localhost:9000")
        creds = client.credentials
        
        found = Client.find_for_auth('localhost:9000', creds['apikey'] )
        assert found
        assert found.auth_by_secret(creds['secret'])
    
        found.set_session("sessionid1234")
        assert found.auth_by_session("sessionid1234")
      end
  
    end
  end  
end