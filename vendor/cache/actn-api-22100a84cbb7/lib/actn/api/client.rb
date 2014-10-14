require 'actn/db/mod'
require 'actn/core_ext/string'
require 'bcrypt'

module Actn
  module Api
    class Client < DB::Mod

      self.table = "clients"
      self.schema = "core"   
  
      BCrypt::Engine.cost = 4
  
      DEFAULT_ACL = {allow: ['*'], disallow: []}
      TTL = 360
  
      attr_accessor :secret
      
      data_attr_accessor :apikey, :secret_hash, :domain, :sessions, :acl
  
      validates_presence_of :apikey, :domain, :acl, :secret_hash
      
      before_validation :set_defaults
  
      def self.find_for_auth domain, apikey
        client = self.find_by(domain: domain, apikey: apikey)
        client
      end
  
      def auth_by_secret secret
        self.secret == secret
      end
  
      def auth_by_session session_id
        return unless client_session = self.sessions[session_id]
        if BCrypt::Password.new(client_session[0]) == session_id
          if Time.now.to_f - client_session[1] > TTL
            invalidated = self.update(sessions: self.sessions.tap{|s| s.delete session_id })
            return false
          else
            return true
          end
        end
      end 
  
      def set_session session_id
        self.update( { sessions: {session_id => [BCrypt::Password.create(session_id), Time.now.to_f] }} )
      end
  
      def secret
        @hash ||= BCrypt::Password.new(self.secret_hash) if self.secret_hash
      end

      def credentials
        {'apikey' => self.apikey, 'secret' => @secret}
      end
  
      def reset_credentials!
        reset_credentials
        _update
        self
      end
  
      def can? resource
        return if self.acl['disallow'].include?("*") || self.acl['disallow'].include?(resource)
        self.acl['allow'].include?("*") || self.acl['allow'].include?(resource)
      end
      
      def to_json options = {}
        super(options.merge(methods: [:credentials], exclude: [:sessions, :secret_hash]))
      end
  
      private
  
      def set_defaults 
        self.domain = self.domain.to_domain        
        self.sessions ||= {}
        self.acl ||= DEFAULT_ACL
        reset_credentials unless self.persisted?
      end
      
      def reset_credentials
        self.apikey = SecureRandom.hex
        @secret = SecureRandom.hex
        @hash = BCrypt::Password.create(@secret)
        self.secret_hash = @hash
      end

    end

  end
end