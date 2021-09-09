class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :fitness_logs
  has_many :favorite_workouts
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
