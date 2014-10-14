require 'actn/db/mod'
require 'actn/core_ext/string'
require 'bcrypt'

module Actn
  
  module Api
  
    class User < DB::Mod
    
      BCrypt::Engine.cost = 4
  
      self.schema = "core"
      self.table = "users"
    
      def self.find_for_auth params
        return unless user = self.find_by('email' => params['email'])
        return unless user.password == params['password']
        user.uuid
      end
  
      attr_accessor :password, :password_confirmation
  
      data_attr_accessor :first_name, :last_name, :email, :hash, :phone
  
      validates_presence_of :first_name, :last_name, :email
      validates_presence_of :password, :password_confirmation, unless: 'persisted?'
      validates_confirmation_of :password, unless: 'persisted?'
      validate :validate_unique_email, unless: 'persisted?'
      
      before_create :set_password
  
      def password
        if self.hash
          @password ||= BCrypt::Password.new(self.hash) 
        else
          @password
        end
      end
      
      def to_json options = {}
        super(options.merge(:exclude [:hash]))
      end      
  
      private
      
      def set_password
        @password = BCrypt::Password.create(self.password)
        self.hash = @password
      end
      
  
      def validate_unique_email
        errors.add(:email, "has already been taken") if self.class.find_by('email' => self.email)
      end
  
    end
  end
end