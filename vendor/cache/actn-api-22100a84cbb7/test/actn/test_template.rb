require 'minitest_helper'
require 'actn/api/template'

module Actn
  module Api
    class TestUser < Minitest::Test

      def teardown
        Actn::Api::Template.delete_all
      end

      def test_db_backend_templates
        template = Actn::Api::Template.create({filename: "home.erb", body: "HOME!"})
        assert_equal File.read(template.path), "HOME!"
      end
  
    end
  end
end