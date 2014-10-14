require "bundler/gem_tasks"
require "rake/testtask"

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.test_files = FileList['test/**/test*.rb']    
end

task :default => :test

ENV['DATABASE_URL'] ||= "postgres://localhost:5432/actn_#{ENV['RACK_ENV'] ||= "development"}" 

require 'actn/api'
 # ENV['DATABASE_URL']="postgres://#{ENV['POSTGRES_PORT_5432_TCP_ADDR']}:#{ENV['POSTGRES_PORT_5432_TCP_PORT']}#{ENV['POSTGRES_NAME']}"
load "actn/db/tasks/db.rake"
load "actn/jobs/tasks/jobs.rake"
