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