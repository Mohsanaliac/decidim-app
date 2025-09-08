module Decidim
  module Idealchat
    class Engine < ::Rails::Engine
      isolate_namespace Decidim::Idealchat

      routes do
        get "/", to: "chat#index"
        post "ask", to: "chat#ask"
      end

      initializer "Idealchat.webpacker.assets_path" do
        Decidim.register_assets_path File.expand_path("app/packs", root)
      end

      initializer "decidim.idealchat.menu" do
        Decidim.menu :menu do |menu|
          menu.add_item :idealchat,
                        I18n.t("menu.idealchat", scope: "decidim"),
                        Rails.application.routes.url_helpers.decidim_idealchat_path,
                        position: 5,
                        icon_name: "comments"
        end
      end
    end
  end
end



