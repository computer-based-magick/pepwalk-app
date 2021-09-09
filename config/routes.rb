Rails.application.routes.draw do
  resources :favorite_workouts
  resources :fitness_logs
  resources :apartments
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end