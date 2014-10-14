# -*- encoding: utf-8 -*-
# stub: actn-api 0.0.6 ruby lib

Gem::Specification.new do |s|
  s.name = "actn-api"
  s.version = "0.0.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Onur Uyar"]
  s.date = "2014-10-14"
  s.email = ["me@onuruyar.com"]
  s.executables = ["actn-api"]
  s.files = [".gitignore", "Gemfile", "LICENSE.txt", "README.md", "Rakefile", "actn-api.gemspec", "bin/actn-api", "config/common.rb", "db/1_api.sql", "db/schemas/client.json", "db/schemas/template.json", "db/schemas/user.json", "lib/actn/api.rb", "lib/actn/api/client.rb", "lib/actn/api/core.rb", "lib/actn/api/cors.rb", "lib/actn/api/goliath/params.rb", "lib/actn/api/goliath/validator.rb", "lib/actn/api/helmet/templates.rb", "lib/actn/api/mw/auth.rb", "lib/actn/api/mw/cors.rb", "lib/actn/api/mw/no_xss.rb", "lib/actn/api/template.rb", "lib/actn/api/ui.rb", "lib/actn/api/user.rb", "lib/actn/api/version.rb", "test/actn/test_client.rb", "test/actn/test_template.rb", "test/actn/test_user.rb", "test/minitest_helper.rb", "test/support/test.html"]
  s.homepage = "https://github.com/hackberry-gh/actn-api"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.2.2"
  s.summary = "Actn.io API"
  s.test_files = ["test/actn/test_client.rb", "test/actn/test_template.rb", "test/actn/test_user.rb", "test/minitest_helper.rb", "test/support/test.html"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.5"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<minitest>, [">= 0"])
      s.add_development_dependency(%q<em-http-request>, [">= 0"])
      s.add_runtime_dependency(%q<oj>, [">= 0"])
      s.add_runtime_dependency(%q<goliath>, [">= 0"])
      s.add_runtime_dependency(%q<rack_csrf>, [">= 0"])
      s.add_runtime_dependency(%q<tilt>, [">= 0"])
      s.add_runtime_dependency(%q<helmet>, [">= 0"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.5"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<minitest>, [">= 0"])
      s.add_dependency(%q<em-http-request>, [">= 0"])
      s.add_dependency(%q<oj>, [">= 0"])
      s.add_dependency(%q<goliath>, [">= 0"])
      s.add_dependency(%q<rack_csrf>, [">= 0"])
      s.add_dependency(%q<tilt>, [">= 0"])
      s.add_dependency(%q<helmet>, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.5"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<minitest>, [">= 0"])
    s.add_dependency(%q<em-http-request>, [">= 0"])
    s.add_dependency(%q<oj>, [">= 0"])
    s.add_dependency(%q<goliath>, [">= 0"])
    s.add_dependency(%q<rack_csrf>, [">= 0"])
    s.add_dependency(%q<tilt>, [">= 0"])
    s.add_dependency(%q<helmet>, [">= 0"])
  end
end
