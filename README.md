# README

install commands 
   $rails db:create
   $rails generate rspec:install
   $rails new pepwalk_app -d postgresql -T
   $bundle add devise
   $rails generate devise:install\n
   $rails generate devise User
   $rails db:migrate
   $rails s

   tailwind commands
   $yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat
   $npx tailwindcss init
   $yarn add postcss@7.0
   $yarn add autoprefixer@9.0
   $yarn add @craco/craco

   $bundle add react-rails
   $rails webpacker:install
   $rails webpacker:install:react
   $rails generate react:install
   $rails generate react:component App
   $rails generate controller Home




app/views/home/index.html.erb

<%= react_component "App", {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>

config/routes.rb

Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end

config/initializers/devise.rb

# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get