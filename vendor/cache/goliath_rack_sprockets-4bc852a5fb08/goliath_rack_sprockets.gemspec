# -*- encoding: utf-8 -*-
# stub: goliath_rack_sprockets 0.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "goliath_rack_sprockets"
  s.version = "0.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Maarten Hoogendoorn"]
  s.date = "2014-10-14"
  s.description = "Sprockets middleware for goliath"
  s.email = ["maarten@moretea.nl"]
  s.files = [".gitignore", ".rspec", ".travis.yml", "Gemfile", "Guardfile", "LICENSE", "README.md", "Rakefile", "goliath_rack_sprockets.gemspec", "lib/goliath/rack/sprockets.rb", "lib/goliath/rack/sprockets/version.rb", "spec/fixtures/assets/javascripts/exists.js", "spec/spec_helper.rb", "spec/unit/rack/sprockets_spec.rb"]
  s.homepage = "http://github.com/moretea/goliath_rack_sprockets"
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.2")
  s.rubygems_version = "2.2.2"
  s.summary = "Sprockets middleware for goliath"
  s.test_files = ["spec/fixtures/assets/javascripts/exists.js", "spec/spec_helper.rb", "spec/unit/rack/sprockets_spec.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<goliath>, ["~> 1.0.0"])
      s.add_runtime_dependency(%q<sprockets>, ["~> 2.12.2"])
      s.add_development_dependency(%q<simplecov>, [">= 0.6.4"])
      s.add_development_dependency(%q<rspec>, ["> 2.0"])
      s.add_development_dependency(%q<em-http-request>, [">= 1.0.0"])
      s.add_development_dependency(%q<rack-rewrite>, [">= 0"])
      s.add_development_dependency(%q<multipart_body>, [">= 0"])
      s.add_development_dependency(%q<guard>, [">= 0"])
      s.add_development_dependency(%q<guard-rspec>, [">= 0"])
      s.add_development_dependency(%q<growl>, ["~> 1.0.3"])
      s.add_development_dependency(%q<rb-fsevent>, [">= 0"])
    else
      s.add_dependency(%q<goliath>, ["~> 1.0.0"])
      s.add_dependency(%q<sprockets>, ["~> 2.12.2"])
      s.add_dependency(%q<simplecov>, [">= 0.6.4"])
      s.add_dependency(%q<rspec>, ["> 2.0"])
      s.add_dependency(%q<em-http-request>, [">= 1.0.0"])
      s.add_dependency(%q<rack-rewrite>, [">= 0"])
      s.add_dependency(%q<multipart_body>, [">= 0"])
      s.add_dependency(%q<guard>, [">= 0"])
      s.add_dependency(%q<guard-rspec>, [">= 0"])
      s.add_dependency(%q<growl>, ["~> 1.0.3"])
      s.add_dependency(%q<rb-fsevent>, [">= 0"])
    end
  else
    s.add_dependency(%q<goliath>, ["~> 1.0.0"])
    s.add_dependency(%q<sprockets>, ["~> 2.12.2"])
    s.add_dependency(%q<simplecov>, [">= 0.6.4"])
    s.add_dependency(%q<rspec>, ["> 2.0"])
    s.add_dependency(%q<em-http-request>, [">= 1.0.0"])
    s.add_dependency(%q<rack-rewrite>, [">= 0"])
    s.add_dependency(%q<multipart_body>, [">= 0"])
    s.add_dependency(%q<guard>, [">= 0"])
    s.add_dependency(%q<guard-rspec>, [">= 0"])
    s.add_dependency(%q<growl>, ["~> 1.0.3"])
    s.add_dependency(%q<rb-fsevent>, [">= 0"])
  end
end
