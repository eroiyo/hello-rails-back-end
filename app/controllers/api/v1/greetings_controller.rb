# frozen_string_literal: true

module Api
  module V1
    class GreetingsController < ApplicationController
      def random
        count = Greeting.count
        random_offset = rand(count)
        random_salute = Greeting.offset(random_offset).first
        render json: random_salute.salute
      end
    end
  end
end
