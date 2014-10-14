require 'actn/api/core'
 
class Backend < Actn::Api::Core
  
  use Rack::Static, :root => "#{Actn::Api.root}/public", :urls => ['favicon.ico']    
  use Goliath::Rack::BarrierAroundwareFactory, Actn::Api::Mw::Auth, with_session: true
          
  helpers do
    
    def set
      env['set'] ||= Actn::DB::Set.new(:core, params[:set])
    end
    
    def model
      env['model'] ||= params[:set].classify.constantize
    end
    
    def name
      env['name'] ||= params[:set].singularize
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
      50
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
    
  end

  before "*" do
    content_type :json
    authenticate!
  end

  get "/:set" do
    # puts criteria.inspect
    set.query(criteria)
  end

  get "/:set/:uuid" do
    set.find(params[:uuid])
  end  

  post "/:set" do
    created = model.create(data)
    if created.persisted?
      created.to_json
    else
      status 406
      created.errors.to_json
    end
  end    

  put "/:set/:uuid" do
    unless record.update(data)
      status 406
      record.errors.to_json      
    else
      record.to_json
    end
  end      

  delete "/:set/:uuid" do
    record.destroy.to_json
  end
end