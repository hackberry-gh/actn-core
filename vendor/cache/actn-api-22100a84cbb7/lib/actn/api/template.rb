require 'actn/db/mod'
require 'actn/core_ext/string'
require 'tempfile'
module Actn
  module Api
    class Template < DB::Mod
      self.table = "templates"
      self.schema = "core" 
      
      data_attr_accessor :filename, :body
  
      validates_presence_of :filename, :body
      
      def path
        @path ||= begin
          parts = filename.split(".")
          file = Tempfile.new([parts[1..-2].join("."),".#{parts.last}"])
          file.write(self.body)
          file.rewind
          file.close          
          file.path
        end
      end
       
    end
  end
end