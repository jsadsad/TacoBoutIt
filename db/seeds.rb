# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(:first_name => "Souper", :last_name => "Hero", :email => "test@example.com", :age => 30, :location => "San Francisco", :password => "password")

User.create(:first_name => "Weird", :last_name => "Dough", :email => "yes@no.com", :age => 40, :location => "Seattle", :password => "123456")

User.create(:first_name => "Nacho", :last_name => "Friend", :email => "puns@yahoo.com", :age => 18, :location => "Portland", :password => "wordpass")

User.create(:first_name => "Egg", :last_name => "Cellent", :email => "needmore@ideas.com", :age => 35, :location => "Dallas", :password => "ihopethisisecure")

User.create(:first_name => "Queue", :last_name => "Tea", :email => "matcha@boba.com", :age => 49, :location => "Portland", :password => "passwordlol")