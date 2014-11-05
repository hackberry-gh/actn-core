require 'actn/api/core'
require 'em-synchrony/fiber_iterator'
 
class Backend < Actn::Api::Core
  
  use Rack::Static, :root => "#{Actn::Api.root}/public", :urls => ['favicon.ico']    
  use Goliath::Rack::BarrierAroundwareFactory, Actn::Api::Mw::Auth, with_session: true
  
  EMPTY_ARRAY = "[]".freeze
  LIMIT = 50.freeze
  
  # PING='{"ping":1}'.freeze
  # STREAM_CLOSE='{"stream":"close"}'.freeze
  
  # STATUSES = {
  #   keepalive: Oj.dump({status: 0}),
  #   closed: Oj.dump({status: -1})
  # }.freeze
          
  helpers do
    
    def set
      env['set'] ||= Actn::DB::Set.new(schema, params[:set])
    end
    
    def model
      env['model'] ||= params[:set].classify.constantize
    end
    
    def name
      env['name'] ||= params[:set].singularize
    end
    
    def schema
      # env['schema'] ||= (query['schema'] || :core)
      params[:schema]
    end
    
    def criteria
      env['criteria'] ||= begin
        criteria = query || {}
        criteria['where'] ||= {}        
        criteria['limit'] ||= limit
        criteria['offset'] = offset
        criteria
      end
    end
  
    def limit
      LIMIT
    end
  
    def page
      ((query['page'] || 1).to_i - 1)
    end

    def offset
      limit * page
    end
    
    def record
      unless record = model.find(params[:uuid])
        raise Goliath::Validation::Error.new(404,"Record not found")
      end
      record
    end
    
    def authenticate!
      raise Goliath::Validation::Error.new(401,"Unauthorized") unless current_user
    end

    def current_user
      env['current_user'] ||= User.find(session[:user_uuid]) if session[:user_uuid]
    end
    
    def query
      params['query']
    end
  
    def data
      params['data']
    end 
    
    def stream criteria
      
      env['keepalive'] ||= EM.add_periodic_timer(1) do
        push EMPTY_ARRAY
      end

      # just give clients a bit time to render/parse results before pushing next
      EM.add_timer (0.1) do
        
        begin
          # env.logger.info set.inspect_query(criteria)
          resp = set.query(criteria)
          if resp != EMPTY_ARRAY
            push resp
            query['page'] += 1
            criteria['offset'] = offset
            stream criteria
          else  
            env['keepalive'].cancel
            env.chunked_stream_close
          end
        rescue PG::Error => e
          status 400
          env['keepalive'].cancel
          push Oj.dump({error: e.result.error_field( PG::Result::PG_DIAG_MESSAGE_PRIMARY )})
          env.chunked_stream_close
        end

      end
            
    end
    
    def push msg
      env.chunked_stream_send "#{msg}\n"
    end
    
  end

  before "*" do
    content_type :json
    authenticate!
  end

  get "/:schema/:set" do
    begin
      # puts criteria.inspect
      if query['stream']
      
        query['limit'] = limit
        query['page'] = 1
        stream criteria
      
        status 200
        content_type 'text/plain'
        header['X-Stream'] = 'Goliath'
        header['Transfer-Encoding'] = 'chunked'
      
        Goliath::Response::STREAMING
      
      else
        set.query(criteria)
      end
    rescue PG::Error => e
      status 400
      e.result.error_field( PG::Result::PG_DIAG_MESSAGE_PRIMARY )
    end
  end

  get "/:schema/:set/:uuid" do
    begin
      set.find(params[:uuid])
    rescue PG::Error => e
      status 400
      e.result.error_field( PG::Result::PG_DIAG_MESSAGE_PRIMARY )
    end
  end  

  post "/:schema/:set" do
    begin
      created = model.create(data)
      if created.persisted?
        created.to_json
      else
        status 406
        created.errors.to_json
      end
    rescue PG::Error => e
      status 400
      e.result.error_field( PG::Result::PG_DIAG_MESSAGE_PRIMARY )
    end
  end    

  put "/:schema/:set/:uuid" do
    begin
      unless record.update(data)
        status 406
        record.errors.to_json      
      else
        record.to_json
      end
    rescue NameError => e
      set.validate_and_upsert(data.merge("uuid" => params[:uuid]))  
    rescue PG::Error => e
      status 400
      e.result.error_field( PG::Result::PG_DIAG_MESSAGE_PRIMARY )
    end
  end      

  delete "/:schema/:set/:uuid" do
    begin
      record.destroy.to_json
    rescue NameError => e
      set.delete(uuid: params[:uuid])  
    rescue PG::Error => e
      status 400
      e.result.error_field( PG::Result::PG_DIAG_MESSAGE_PRIMARY )
    end
  end
  
end