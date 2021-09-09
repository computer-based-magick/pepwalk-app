class CreateFitnessLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :fitness_logs do |t|
      t.datetime :date
      t.integer :workout_id
      t.string :workout_name
      t.integer :happy
      t.integer :sad
      t.integer :energetic
      t.integer :lethargic
      t.text :entry
      t.integer :user_id

      t.timestamps
    end
  end
end
