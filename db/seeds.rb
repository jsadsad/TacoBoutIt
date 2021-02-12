# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all

User.create(:first_name => "Souper", :last_name => "Hero", :email => "test@example.com", :age => 30, :location => "San Francisco", :password => "password")

User.create(:first_name => "Weird", :last_name => "Dough", :email => "yes@no.com", :age => 40, :location => "Seattle", :password => "123456")

User.create(:first_name => "Queue", :last_name => "Tea", :email => "matcha@boba.com", :age => 49, :location => "Portland", :password => "passwordlol")

Business.create(:name => "House of Prime Rib", :website => "houseofprimerib.net", :category => "American (Traditional)", :address => "1906 Van Ness Ave", :city => "San Francisco", :state => "CA", :zip_code => 94109, :phone_number => "415-885-4605", :lat => 37.7934405903263, :lng => -122.42273256793617)

Business.create(:name => "Spoon House Bakery and Restaurant", :category => "Italian", :address => "1601 W Redondo Beach Blvd", :city => "Gardena", :state => "CA", :zip_code => 90247, :phone_number => "(310) 538-0376", :lat => 33.89007225223046, :lng => -118.3048875687615)

Business.create(:name => "Thai Elephant Express", :category => "Thai", :address => "3005 Silver Creek Rd Ste 128", :city => "San Jose", :state => "CA", :zip_code => 95121, :phone_number => "(408) 528-8882", :lat => 37.30874462435048, :lng => -121.81341205217721)