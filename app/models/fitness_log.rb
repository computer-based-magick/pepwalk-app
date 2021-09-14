class FitnessLog < ApplicationRecord
    belongs_to :user
    validates :date, :workout_id, :workout_name, :happy, :sad, :energetic, :lethargic, :entry, :user_id, presence: true
end
