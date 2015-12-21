require 'goliath'
require 'goliath/websocket'
require 'oj'
require 'actn/core_ext/string'

class Live < Goliath::WebSocket

  use Rack::Static, :root => "#{Actn::Api.root}/public", :urls => ['favicon.ico']
    
  def on_open(env)
    env.logger.debug("WS OPEN")
    env['keepalive'] = EM.add_periodic_timer(10) do
      env.channel << '{"ping":1}'
    end
    env['subscription'] = env.channel.subscribe { |m| env.stream_send(m) }
  end

  def on_message(env, msg)
    env.logger.debug("WS MESSAGE: #{msg}")
    env.channel << msg
  end

  def on_close(env)
    env.logger.debug("WS CLOSED")
    env['keepalive'].cancel if env['keepalive']    
    env.channel.unsubscribe(env['subscription'])
  end

  def on_error(env, error)
    env['keepalive'].cancel if env['keepalive']    
    env.logger.error error
  end

  def response(env)    
    # raise Goliath::Validation::UnauthorizedError.new unless auth!
    super(env)
  end
  
  private
  
  def auth!
    !! ( (env['HTTP_ORIGIN'] || "").to_domain == ENV['APP_NAME'] || ( env['SERVER_IP'] == env['HTTP_HOST'].split(":")[0] ) )
  end 
  
end