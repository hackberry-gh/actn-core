require "rake/testtask"
require 'rake/sprocketstask'

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.test_files = FileList['test/**/test*.rb']    
end

task :default => :test

ENV['DATABASE_URL'] ||= "postgres://localhost:5432/actn_#{ENV['RACK_ENV'] ||= "development"}" 

require 'actn/db'
require 'actn/jobs'
require 'actn/api'

load "actn/db/tasks/db.rake"
load "actn/jobs/tasks/jobs.rake"

@env = Sprockets::Environment.new("#{Actn::Api.root}") do |env|
  env.append_path("assets/javascripts")
  env.append_path("assets/stylesheets")
  env.append_path("assets")        
end
    
Rake::SprocketsTask.new do |t|
  t.environment = @env
  t.output      = "./public/assets"
  t.assets      = %w( application.js application.css webfonts/*.* )
end

# User.create(first_name: "onur", last_name: "uyar", email: "me@onuruyar.com", password: "password", password_confirmation: "password")

def bas
sets=%W(supporters conductors pilots idiots)
Dir.glob("#{Actn::Api.root}/test/json/*.json").each do |json|
  Oj.load(File.read(json)).each do |data|
    Actn::DB::Set[sets.sample].upsert(Oj.dump(data))
    sleep (1..10).to_a.sample.to_f / 10.0
  end
end
end