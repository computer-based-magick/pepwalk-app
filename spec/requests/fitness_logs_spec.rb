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
          date: '2021-09-10T22:09:16.408Z',
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
      expect(new_fitness_log.date).to eq '2021-09-10T22:09:16.408Z'
      expect(new_fitness_log.happy).to eq 5
      expect(new_fitness_log.sad).to eq 5
      expect(new_fitness_log.energetic).to eq 7
      expect(new_fitness_log.lethargic).to eq 2
      expect(new_fitness_log.entry).to eq 'crushed it!'
      expect(new_fitness_log.user_id).to eq user.id
      expect(new_fitness_log.workout_name).to eq 'Forward Lunge'
      expect(new_fitness_log.workout_id).to eq 874
      end
   end
end
