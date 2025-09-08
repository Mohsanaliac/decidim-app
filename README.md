# decidim_app

Free Open-Source participatory democracy, citizen participation and open government for cities and organizations

This is the open-source repository for decidim_app, based on [Decidim](https://github.com/decidim/decidim).



# Comprehensive Guide to Decidim: Installation, Usage, and Customization

## Part 1: Basic Installation of Ruby on Rails

To set up a Ruby on Rails environment for Decidim, follow these steps:

### Step 1: Install Ruby

Ensure you have Ruby installed (Decidim 0.27.10 requires Ruby 3.0 or higher). Use a version manager like `rbenv` or `rvm`:

```bash
# Install rbenv (example for Ubuntu)
sudo apt update
sudo apt install -y rbenv
rbenv install 3.1.2
rbenv global 3.1.2
```

Verify Ruby version:

```bash
ruby -v
# Should output: ruby 3.1.2p...
```

### Step 2: Install Rails

Install the Rails gem (version 7.0 or compatible with Decidim 0.27.10):

```bash
gem install rails -v 7.0.8
```

Verify Rails version:

```bash
rails -v
# Should output: Rails 7.0.8
```

### Step 3: Install System Dependencies

Install required dependencies (e.g., for Ubuntu):

```bash
sudo apt install -y nodejs postgresql libpq-dev imagemagick
```

Set up PostgreSQL:

```bash
sudo service postgresql start
sudo -u postgres psql -c "CREATE USER decidim WITH PASSWORD 'decidim';"
sudo -u postgres createdb decidim_development
```

## Part 2: Installing Decidim

### Step 1: Create a New Decidim Application

Generate a new Decidim app:

```bash
gem install decidim -v 0.27.10
decidim decidim_app
cd decidim_app
```

### Step 2: Configure Database

Edit `config/database.yml` to match your PostgreSQL setup:

```yaml
development:
  adapter: postgresql
  encoding: unicode
  database: decidim_development
  username: decidim
  password: decidim
  host: localhost
```

### Step 3: Install Dependencies and Set Up Database

Run:

```bash
bundle install
bin/rails db:create db:migrate db:seed
```

### Step 4: Start the Development Server

```bash
bin/rails server
```

Access the app at `http://localhost:3000`. The default admin credentials are provided in the seed data (check `db/seeds.rb`).

## Part 3: Version Checking

To verify versions of installed components:

- **Ruby**: `ruby -v`
- **Rails**: `rails -v`
- **Decidim**: Check `Gemfile.lock` or run:

```bash
bundle show decidim
# Should output: /path/to/gems/decidim-0.27.10
```

- **PostgreSQL**: `psql --version`
- **Node.js**: `node -v`




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









# Installing and Using the `decidim-templates` Gem and Creating a New Component in Decidim

## Part 1: Installing and Using the `decidim-templates` Gem

To **install and use the `decidim-templates` gem** in your Decidim 0.27.10 development environment, follow these **step-by-step instructions**:

### Step 1: Add the Gem

In your `Gemfile`, ensure you have:

```ruby
gem "decidim-templates", "0.27.10"
```

Then run:

```bash
bundle install
```

### Step 2: Install the Migrations

Use the correct namespaced rake task:

```bash
bin/rails decidim_templates:install:migrations
```

This will copy the required migration file into your `db/migrate` folder.

### Step 3: Run the Migrations

Apply the migrations to your database:

```bash
bin/rails db:migrate
```

This creates the necessary tables like `decidim_templates_templates`.

### Step 4: Load Seed Data (Optional)

If the component provides seeds (not always necessary):

```bash
bin/rails db:seed
```

### Step 5: Enable the Component in Your Participatory Space

In Decidim, components like `templates` must be explicitly enabled per space (e.g., a participatory process):

1. Go to the Decidim admin panel.
2. Select or create a **Participatory Process** (or similar space).
3. In the admin sidebar, click **Components**.
4. Click **Add component**.
5. Select **Templates** from the dropdown.
6. Configure as needed and **save**.

### Step 6: Access and Use the Component

Once enabled:

- Navigate to your participatory space.
- The **Templates** component should be listed.
- Admins can now create and manage templates (e.g., for forms, questionnaires, etc.).

### Step 7: Optional — Explore Routes or Customize

To list the available routes for the component:

```bash
bin/rails routes | grep templates
```

To customize views, copy them from the gem into your app and override them.

---

## Part 2: Creating a New Component/Module in the Decidim Platform

### Step 1: Create the New Module

Create a new module named `idealchat` in the Decidim application by running:

```bash
decidim --component idealchat
```

The generated file structure is as follows (create any missing files as needed):

```
.
├── app
│   ├── controllers
│   │   └── decidim
│   │       └── idealchat
│   │           ├── admin
│   │           │   └── application_controller.rb
│   │           ├── application_controller.rb
│   │           └── chat_controller.rb
│   ├── helpers
│   │   └── decidim
│   │       └── idealchat
│   │           └── application_helper.rb
│   ├── models
│   │   └── decidim
│   │       └── idealchat
│   │           └── application_record.rb
│   ├── packs
│   │   ├── entrypoints
│   │   │   └── decidim_idealchat.js
│   │   ├── images
│   │   │   └── decidim
│   │   │       └── idealchat
│   │   │           └── icon.svg
│   │   └── stylesheets
│   │       └── decidim
│   │           └── idealchat
│   │               └── idealchat.scss
│   └── views
│       └── decidim
│           └── idealchat
│               └── chat
│                   └── index.html.erb
├── bin
│   └── rails
├── config
│   ├── assets.rb
│   ├── i18n-tasks.yml
│   ├── locales
│   │   └── en.yml
│   └── routes.rb
├── decidim-idealchat.gemspec
├── lib
│   └── decidim
│       ├── idealchat
│       │   ├── admin_engine.rb
│       │   ├── admin.rb
│       │   ├── component.rb
│       │   ├── engine.rb
│       │   ├── test
│       │   │   └── factories.rb
│       │   └── version.rb
│       └── idealchat.rb
├── LICENSE-AGPLv3.txt
├── Rakefile
├── README.md
└── spec
    ├── factories.rb
    └── spec_helper.rb
```

### Step 2: Update Main Application Routes

In the Decidim application's main `routes.rb`, add:

```ruby
mount Decidim::Idealchat::Engine => "/idealchat"
```

### Step 3: Add the Gem to the Main Application

In the Decidim application's main `Gemfile`, add:

```ruby
gem "decidim-idealchat", path: "./decidim-module-idealchat"
```

### Step 4: Edit `engine.rb`

In the `lib/decidim/idealchat/engine.rb` file, include the following code:

```ruby
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
```

### Step 5: Update the View

Edit `app/views/decidim/idealchat/chat/index.html.erb` to include:

```html
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
```

### Step 6: Edit the Controller

In `app/controllers/decidim/idealchat/chat_controller.rb`, include:

```ruby
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
          headers: {
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
          }
        )

        render json: { answer: response.parsed_response['answer'] }
      rescue StandardError => e
        render json: { error: e.message }, status: :internal_server_error
      end
    end
  end
end
```

### Step 7: Add the Chatbot to the Main Menu

To add the chatbot to the main Decidim menu, ensure the `engine.rb` file includes the menu initializer (already added in Step 4):

```ruby
initializer "decidim.idealchat.menu" do
  Decidim.menu :menu do |menu|
    menu.add_item :idealchat,
                  I18n.t("menu.idealchat", scope: "decidim"),
                  Rails.application.routes.url_helpers.decidim_idealchat_path,
                  position: 5,
                  icon_name: "comments"
  end
end
```

### Step 8: Add Translation for the Module

Edit `config/locales/en.yml` to include:

```yaml
en:
  decidim:
    menu:
      idealchat: "Chatbot"
```


