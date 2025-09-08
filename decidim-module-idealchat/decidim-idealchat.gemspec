# frozen_string_literal: true

$LOAD_PATH.push File.expand_path("lib", __dir__)

require "decidim/idealchat/version"

Gem::Specification.new do |s|
  s.version = Decidim::Idealchat.version
  s.authors = [""]
  s.email = [""]
  s.license = "AGPL-3.0"
  s.homepage = "https://github.com/decidim/decidim-module-idealchat"
  s.required_ruby_version = "~> 3.0"

  s.name = "decidim-idealchat"
  s.summary = "A decidim idealchat module"
  s.description = "This module will help me to add the decidim chatbot for the user support.."

  s.files = Dir.chdir(__dir__) do
    `git ls-files -z`.split("\x0").select do |f|
      (File.expand_path(f) == __FILE__) ||
        f.start_with?(*%w(app/ config/ db/ lib/ LICENSE-AGPLv3.txt Rakefile README.md))
    end
  end

  s.add_dependency "decidim-core", Decidim::Idealchat.version
end
