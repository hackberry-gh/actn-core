require 'minitest_helper'
require 'actn/api/user'

module Actn
  module Api
    class TestUser < Minitest::Test
    
      def teardown
        User.delete_all
      end

      def test_create_and_find_for_auth
        user = User.create({'first_name' =>  "Name", 'last_name' =>  "Last", 
        'email' =>  "email2@email.com", 'password' =>  "password", 'password_confirmation' => "password"})
        assert user.persisted?
        assert User.find_for_auth('email' =>  "email2@email.com", 'password' =>  'password')
      end
  
      def test_validation
        user = User.create({})
        assert_match /can't be blank/, user.errors.inspect
      end
  
      def test_validation_uniq
        User.create('first_name' =>  "Name", 'last_name' =>  "Last", 'email' =>  "email4@email.com", 
        'password' =>  "password", 'password_confirmation' => "password")
    
        user = User.create('first_name' =>  "Name", 'last_name' =>  "Last", 'email' =>  "email4@email.com", 
        'password' =>  "password", 'password_confirmation' => "password")      
    
        assert_match /has already been taken/, user.errors.inspect
      end    


    end
  end
end