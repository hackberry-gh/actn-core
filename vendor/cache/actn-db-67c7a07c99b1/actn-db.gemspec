# -*- encoding: utf-8 -*-
# stub: actn-db 0.0.5 ruby lib

Gem::Specification.new do |s|
  s.name = "actn-db"
  s.version = "0.0.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Onur Uyar"]
  s.date = "2014-10-14"
  s.email = ["me@onuruyar.com"]
  s.files = [".gitignore", ".travis.yml", "Gemfile", "LICENSE.txt", "README.md", "Rakefile", "actn-db.gemspec", "db/1_db.sql", "db/__functions.sql", "db/__setup.sql", "db/lib/_0_underscore.js", "db/lib/_1_inflections.js", "db/lib/_2_jjv.js", "db/lib/_3_actn.js", "db/lib/_4_functions.coffee", "db/lib/_4_functions.js", "db/lib/_5_builder.coffee", "db/lib/_5_builder.js", "db/schemas/model.json", "lib/actn/core_ext/hash.rb", "lib/actn/core_ext/kernel.rb", "lib/actn/core_ext/string.rb", "lib/actn/db.rb", "lib/actn/db/mod.rb", "lib/actn/db/model.rb", "lib/actn/db/pg.rb", "lib/actn/db/set.rb", "lib/actn/db/tasks/db.rake", "lib/actn/db/version.rb", "lib/actn/paths.rb", "test/actn/test_mod.rb", "test/actn/test_model.rb", "test/actn/test_pg_funcs.rb", "test/actn/test_set.rb", "test/minitest_helper.rb"]
  s.homepage = "https://github.com/hackberry-gh/actn-db"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.2.2"
  s.summary = "Actn.io DB"
  s.test_files = ["test/actn/test_mod.rb", "test/actn/test_model.rb", "test/actn/test_pg_funcs.rb", "test/actn/test_set.rb", "test/minitest_helper.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.5"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<minitest>, [">= 0"])
      s.add_development_dependency(%q<minitest-reporters>, [">= 0"])
      s.add_runtime_dependency(%q<coffee-script>, [">= 0"])
      s.add_runtime_dependency(%q<em-pg-client>, [">= 0"])
      s.add_runtime_dependency(%q<activemodel>, [">= 0"])
      s.add_runtime_dependency(%q<oj>, [">= 0"])
      s.add_runtime_dependency(%q<bcrypt>, [">= 0"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.5"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<minitest>, [">= 0"])
      s.add_dependency(%q<minitest-reporters>, [">= 0"])
      s.add_dependency(%q<coffee-script>, [">= 0"])
      s.add_dependency(%q<em-pg-client>, [">= 0"])
      s.add_dependency(%q<activemodel>, [">= 0"])
      s.add_dependency(%q<oj>, [">= 0"])
      s.add_dependency(%q<bcrypt>, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.5"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<minitest>, [">= 0"])
    s.add_dependency(%q<minitest-reporters>, [">= 0"])
    s.add_dependency(%q<coffee-script>, [">= 0"])
    s.add_dependency(%q<em-pg-client>, [">= 0"])
    s.add_dependency(%q<activemodel>, [">= 0"])
    s.add_dependency(%q<oj>, [">= 0"])
    s.add_dependency(%q<bcrypt>, [">= 0"])
  end
end
