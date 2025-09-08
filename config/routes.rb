
Rails.application.routes.draw do
  get '/chatbot', to: 'chatbot/standalone#show', as: :chatbot_standalone_page


  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
  
  mount Decidim::Core::Engine => '/'
  mount Decidim::Idealchat::Engine => "/idealchat"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

