require 'rails_helper'

RSpec.describe FitnessLog, type: :model do
  it "should validate date" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:date]).to_not be_empty
  end
  it "should validate workout_id" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:workout_id]).to_not be_empty
  end
  it "should validate workout_name" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:workout_name]).to_not be_empty
  end
  it "should validate happy" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:happy]).to_not be_empty
  end
  it "should validate sad" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:sad]).to_not be_empty
  end
  it "should validate energetic" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:energetic]).to_not be_empty
  end
  it "should validate lethargic" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:lethargic]).to_not be_empty
  end
  it "should validate entry" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:entry]).to_not be_empty
  end
  it "should validate user_id" do
  Fitness_Log = FitnessLog.create
  expect(Fitness_Log.errors[:user_id]).to_not be_empty
  end
end
