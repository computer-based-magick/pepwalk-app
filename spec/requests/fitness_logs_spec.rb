require 'rails_helper'

RSpec.describe "FitnessLogs", type: :request do
   let(:user) do
     User.create email: 'andy@test.com', password: 'testing', password_confirmation: 'testing'
   end

   describe "GET /index" do
   it "gets a list of fitness logs" do
     FitnessLog.create date: DateTime.now, workout_id: 874, workout_name: 'Forward Lunge', happy: 5, sad: 5, energetic: 7, lethargic: 2, entry: 'crushed it!', user_id: user.id

     get fitness_logs_path

     fitnesslogs = JSON.parse(response.body)
     expect(response).to have_http_status(200)
     expect(fitnesslogs.length).to eq 1
   end
end
   describe "POST /create" do
    it 'creates an fitness log' do
      fitness_log_params = {
        fitnesslog: {
          date: DateTime.now,
          workout_id: 874,
          workout_name: 'Forward Lunge',
          happy: 5,
          sad: 5,
          energetic: 7,
          lethargic: 2,
          entry: 'crushed it!',
          user_id: user.id,
        }
    }
      post '/fitness_logs', params: fitness_log_params
      new_fitness_log = FitnessLog.first
      expect(response).to have_http_status(200)
      expect(new_fitness_log.sad).to eq 5
      end
   end
end
