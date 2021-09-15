# README

$ Title — What is your app/project called?

Pepwalk
Product Description:
Exercising has been proven to have  many health  benefits but It can be very hard to start building new fitness habits especially when most people's motivations come from a change in their physique which let’s face it doesn’t happen overnight.. So it can be very easy to lose interest and motivation, but did you know one of the biggest health benefits from regular exercise is a major improvement in your mental health? Exercising provides an outlet for your stress, anxiety  and depression. It also helps improve your memory, thought process and it even makes you sleep better! So we at PepWalk came up with a solution to fill those gaps in motivation by providing you with an app that keeps track of not only your weight or what exercise you did for the day but more importantly how you’re feeling throughout your day! Logging your mood and seeing the internal benefits that you’re reaping from your fitness journey or lack thereof has so much more value to it than stepping on a scale or looking in the mirror.  Looking back at your entries will help you get a clearer understanding that what you’re doing is actually working not just on the outside but on the inside as well!

Overview — Why did you start this project?
This project was created to satisfy the requirements for completion of a four month software developer bootcamp; LEARN Academy, located in San Diego California.

$Features — What are some key things your project can do?

$ Running the project — How could someone else get your code working for them?

$ Dependencies — What are the main outside resources your project needs to run?

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
$./bin/bundle add tailwindcss-rails
$./bin/rails tailwindcss:install
$yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
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
get '\*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
end

config/initializers/devise.rb

# Find this line:

config.sign_out_via = :delete

# and replace it with this:

config.sign_out_via = :get
