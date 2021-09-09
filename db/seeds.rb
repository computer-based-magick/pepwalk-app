users = [
    {
        email: 'test@test.com',
        password: 'test123',
        password_confirmation: 'test123'
    }
]

logs = [
    {
        date: DateTime.now,
        workout_id: 874,
        workout_name: 'Forward Lunge',
        happy: 5,
        sad: 5,
        energetic: 7,
        lethargic: 2,
        entry: 'crushed it!'
    },
    {
        date: DateTime.now,
        workout_id: 387,
        workout_name: 'Wall Squat',
        happy: 3,
        sad: 1,
        energetic: 1,
        lethargic: 10,
        entry: 'just not feeling it'
    }
]

favorites = [
    {
        workout_id: 874
    }
]

users.each do |attribute|
    User.create attribute
end

user = User.first

logs.each do |attribute|
    user.fitness_logs.create attribute
end

favorites.each do |attribute|
    user.favorite_workouts.create attribute
end