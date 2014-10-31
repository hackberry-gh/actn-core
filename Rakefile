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
require 'sprockets/yui_compressor'
require 'sprockets/uglifier_compressor'

load "actn/db/tasks/db.rake"
load "actn/jobs/tasks/jobs.rake"

@env = Sprockets::Environment.new("#{Actn::Api.root}") do |env|
  env.append_path("assets/javascripts")
  env.append_path("assets/stylesheets")
  env.append_path("assets")    

  env.js_compressor = Sprockets::UglifierCompressor
  env.css_compressor = Sprockets::YUICompressor
end
    
Rake::SprocketsTask.new do |t|
  t.environment = @env
  t.output      = "./public/assets"
  t.assets      = %w( application.js application.css webfonts/*.* )
end


namespace :assets do
  desc "Compile assets and removed digest from filenames :'("
  task :precompile => :assets do    
    Dir.glob("#{Actn::Api.root}/public/assets/**/*").each do |asset|
      if File.file?(asset)
        dir = File.dirname(asset)
        base = File.basename(asset).split("-")[0..-2].join("-")
        ext = asset.split("/").last.to_s.split(".",2).last
        `mv #{asset} #{dir}/#{base}.#{ext}`
      end
    end
  end
end

# User.create(first_name: "onur", last_name: "uyar", email: "me@onuruyar.com", password: "password", password_confirmation: "password")

def bas
# sets=%W(supporters conductors pilots idiots)
sets=%W(supporters)
Dir.glob("#{Actn::Api.root}/test/json/*.json").each do |json|
  Oj.load(File.read(json)).each do |data|
    Actn::DB::Set[sets.sample].upsert(Oj.dump(data))
    # sleep (1..10).to_a.sample.to_f / 10.0
  end
end
end