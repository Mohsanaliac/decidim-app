# frozen_string_literal: true

base_path = File.expand_path("..", __dir__)

Decidim::Webpacker.register_path("#{base_path}/app/packs")

Decidim::Webpacker.register_entrypoints(
  decidim_idealchat: "#{base_path}/app/packs/entrypoints/decidim_idealchat.js"
)

Decidim::Webpacker.register_stylesheet_import(
  "stylesheets/decidim/idealchat/idealchat"
)


