# frozen_string_literal: true

module Decidim
  module Idealchat
    # This is the engine that runs on the public interface of `Idealchat`.
    class AdminEngine < ::Rails::Engine
      isolate_namespace Decidim::Idealchat::Admin

      paths["db/migrate"] = nil
      paths["lib/tasks"] = nil

      routes do
        # Add admin engine routes here
        # resources :idealchat do
        #   collection do
        #     resources :exports, only: [:create]
        #   end
        # end
        # root to: "idealchat#index"
      end

      def load_seed
        nil
      end
    end
  end
end
