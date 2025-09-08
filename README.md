# decidim_app

Free Open-Source participatory democracy, citizen participation and open government for cities and organizations

This is the open-source repository for decidim_app, based on [Decidim](https://github.com/decidim/decidim).

## Setting up the application

You will need to do some steps before having the app working properly once you've deployed it:

1. Open a Rails console in the server: `bundle exec rails console`
2. Create a System Admin user:
```ruby
user = Decidim::System::Admin.new(email: <email>, password: <password>, password_confirmation: <password>)
user.save!
```
3. Visit `<your app url>/system` and login with your system admin credentials
4. Create a new organization. Check the locales you want to use for that organization, and select a default locale.
5. Set the correct default host for the organization, otherwise the app will not work properly. Note that you need to include any subdomain you might be using.
6. Fill the rest of the form and submit it.

You're good to go!






# Decidim IdealChat Module

**Decidim IdealChat** is a custom module for Decidim 0.27.10 that integrates an AI-powered chatbot assistant into your participatory platform.

---

## Table of Contents

- [Installation](#installation)  
  - [Using Existing Modules (`decidim-templates` example)](#using-existing-modules-decidem-templates-example)  
  - [Creating Your Own Module (`idealchat`)](#creating-your-own-module-idealchat)  
- [Usage](#usage)  
- [Customizations](#customizations)  
- [Translations](#translations)  

---

## Installation

### Using Existing Modules (`decidim-templates` example)

1. **Add the Gem**

```ruby
gem "decidim-templates", "0.27.10"

Then run:

bundle install

    Install Migrations

bin/rails decidim_templates:install:migrations

    Run Migrations

bin/rails db:migrate

    Load Seed Data (Optional)

bin/rails db:seed

    Enable the Component in Your Participatory Space

    Go to the Decidim admin panel.

    Select or create a Participatory Process.

    Navigate to Components → Add component → Select Templates → Save.

    Access and Use the Component

    Navigate to your participatory space.

    The Templates component should now be active.

    Optional: Explore Routes or Customize

bin/rails routes | grep templates

    Copy views from the gem into your app to override and customize them.

Creating Your Own Module (idealchat)

    Generate a New Component

decidim --component idealchat

Your folder structure should look like:

app/
├── controllers/decidim/idealchat/...
├── helpers/decidim/idealchat/...
├── models/decidim/idealchat/...
├── packs/...
├── views/decidim/idealchat/chat/index.html.erb
config/
├── locales/en.yml
├── routes.rb
...

    Mount the Engine in routes.rb

mount Decidim::Idealchat::Engine => "/idealchat"

    Add Gem in Main Gemfile

gem "decidim-idealchat", path: "./decidim-module-idealchat"

    Edit engine.rb

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

    Update the View (index.html.erb)

<%= csrf_meta_tags %>
<section class="section">
  <div class="container">
    <h1 class="title is-3">💬 AI Chatbot Assistant</h1>
    <div id="chat-box" class="box mb-4" style="min-height: 250px;"></div>

    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" type="text" id="chat-input" placeholder="Type your question...">
      </div>
      <div class="control">
        <button class="button is-primary" onclick="sendMessage()">Send</button>
      </div>
    </div>
  </div>
</section>

<script>
function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  fetch("/idealchat/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": "<%= form_authenticity_token %>"
    },
    body: JSON.stringify({ message })
  })
  .then(response => response.json())
  .then(data => {
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.answer}</p>`;
  })
  .catch(error => {
    chatBox.innerHTML += `<p><strong>Bot:</strong> Error: ${error.message}</p>`;
  });
}
</script>

    Edit Controller (chat_controller.rb)

module Decidim
  module Idealchat
    class ChatController < Decidim::ApplicationController
      skip_before_action :verify_authenticity_token

      def ask
        handle_request('ask')
      end

      def ask_legislation
        handle_request('legislation')
      end

      def ask_reports
        handle_request('reports')
      end

      def ask_documentation
        handle_request('documentation')
      end

      private

      def handle_request(endpoint)
        message = params[:message]
        language = params[:language] || 'en'

        response = HTTParty.post(
          "#{ENV.fetch('FASTAPI_URL', 'http://localhost:8000')}/api/#{endpoint}",
          body: { message: message, language: language }.to_json,
          headers: { 'Content-Type' => 'application/json', 'Accept' => 'application/json' }
        )

        render json: { answer: response.parsed_response['answer'] }
      rescue StandardError => e
        render json: { error: e.message }, status: :internal_server_error
      end
    end
  end
end

    Add Module to Main Menu

Already included in engine.rb initializer:

initializer "decidim.idealchat.menu" do
  Decidim.menu :menu do |menu|
    menu.add_item :idealchat,
                  I18n.t("menu.idealchat", scope: "decidim"),
                  Rails.application.routes.url_helpers.decidim_idealchat_path,
                  position: 5,
                  icon_name: "comments"
  end
end

    Add Translations (config/locales/en.yml)

en:
  decidim:
    menu:
      idealchat: "Chatbot"

