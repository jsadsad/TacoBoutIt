# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(:first_name => "Josh", :last_name => "Javascript", :email => "test@example.com", :age => 30, :location => "San Francisco", :password => "123515")

User.create(:first_name => "Helen", :last_name => "Ruby", :email => "what@huh.com", :age => 40, :location => "Seattle", :password => "123515")

User.create(:first_name => "Chris", :last_name => "Python", :email => "example@test.com", :age => 50, :location => "Portland", :password => "password123")

User.create(:first_name => "Diana", :last_name => "Java", :email => "easy", :age => 50, :location => "Portland", :password => "login!")