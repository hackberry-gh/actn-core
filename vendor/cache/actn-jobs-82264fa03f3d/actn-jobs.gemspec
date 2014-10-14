# -*- encoding: utf-8 -*-
# stub: actn-jobs 0.0.5 ruby lib

Gem::Specification.new do |s|
  s.name = "actn-jobs"
  s.version = "0.0.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Onur Uyar"]
  s.date = "2014-10-14"
  s.email = ["me@onuruyar.com"]
  s.files = [".gitignore", ".travis.yml", "Gemfile", "LICENSE.txt", "README.md", "Rakefile", "actn-jobs.gemspec", "db/1_jobs.sql", "db/lib/_4_jobs.coffee", "db/lib/_4_jobs.js", "db/schemas/job.json", "lib/actn/hooks.rb", "lib/actn/hooks/trace.rb", "lib/actn/jobs.rb", "lib/actn/jobs/base.rb", "lib/actn/jobs/job.rb", "lib/actn/jobs/job_error.rb", "lib/actn/jobs/notifier.rb", "lib/actn/jobs/tasks/jobs.rake", "lib/actn/jobs/version.rb", "lib/actn/jobs/worker.rb", "test/actn/test_jobs.rb", "test/minitest_helper.rb"]
  s.homepage = "https://github.com/hackberry-gh/actn-jobs"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.2.2"
  s.summary = "Actn.io Jobs"
  s.test_files = ["test/actn/test_jobs.rb", "test/minitest_helper.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.5"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<minitest>, [">= 0"])
      s.add_runtime_dependency(%q<websocket-eventmachine-client>, [">= 0"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.5"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<minitest>, [">= 0"])
      s.add_dependency(%q<websocket-eventmachine-client>, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.5"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<minitest>, [">= 0"])
    s.add_dependency(%q<websocket-eventmachine-client>, [">= 0"])
  end
end
