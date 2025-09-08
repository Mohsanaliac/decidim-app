Decidim::Idealchat::Engine.routes.draw do
  post '/ask', to: 'chat#ask'
  post '/ask_legislation', to: 'chat#ask_legislation'
  post '/ask_reports', to: 'chat#ask_reports'
  post '/ask_documentation', to: 'chat#ask_documentation'
end