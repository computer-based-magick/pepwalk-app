class CreateFavoriteWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_workouts do |t|
      t.integer :workout_id
      t.integer :user_id

      t.timestamps
    end
  end
end
