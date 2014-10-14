$stdout.sync = true
$stderr.sync = true

require 'oj'
require 'em/channel'

config['channel'] = EM::Channel.new