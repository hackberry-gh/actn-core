web_core_back:  bundle exec actn-api backend -p 5001 -sv 
web_core_front: bundle exec actn-api frontend -p 5002 -sv 
web_live: bundle exec actn-api live -p 5003 -sv
worker_notifier: sleep 5 && WS_URI=ws://dev.core.lvh.me:$PORT bundle exec rake jobs:notify
web: echo $PORT && haproxy -f ./haproxy.cfg 

