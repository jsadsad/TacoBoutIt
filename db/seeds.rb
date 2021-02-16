# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

user1 = User.create!(:first_name => "Souper", :last_name => "Hero", :email => "test@example.com", :age => 30, :location => "San Francisco", :password => "password")
user2 = User.create!(:first_name => "Weird", :last_name => "Dough", :email => "yes@no.com", :age => 40, :location => "Seattle", :password => "123456")
user3 = User.create!(:first_name => "Queue", :last_name => "Tea", :email => "matcha@boba.com", :age => 49, :location => "Portland", :password => "passwordlol")

business1 = Business.create!(:name => "House of Prime Rib", :website => "https://www.houseofprimerib.net/", :category => "American (Traditional)", :address => "1906 Van Ness Ave", :city => "San Francisco", :state => "CA", :zip_code => 94109, :phone_number => "415-885-4605", :lat => 37.7934405903263, :lng => -122.42273256793617)
business2 = Business.create!(:name => "Spoon House Bakery and Restaurant", :website => "http://places.singleplatform.com/spoon-house/menu?ref=google", :category => "Italian", :address => "1601 W Redondo Beach Blvd", :city => "Gardena", :state => "CA", :zip_code => 90247, :phone_number => "(310) 538-0376", :lat => 33.89007225223046, :lng => -118.3048875687615)
business3 = Business.create!(:name => "Thai Elephant Express", :website => "https://zmenu.com/thai-elephant-express-san-jose-online-menu/", :category => "Thai", :address => "3005 Silver Creek Rd Ste 128", :city => "San Jose", :state => "CA", :zip_code => 95121, :phone_number => "(408) 528-8882", :lat => 37.30874462435048, :lng => -121.81341205217721)

review1 = Review.create!(:content => "Our steak was too overcooked. It was hard to chew and I spit it out!", :rating => 2, :author_id => 2, :business_id => 1)
review2 = Review.create!(:content => "Pasta was super gooood! The place followed COVID-19 guidelines", :rating => 5, :author_id => 3, :business_id => 2)
review3 = Review.create!(:content => "Mmmmm...pad thai is always the right choice.", :rating => 4, :author_id => 1, :business_id => 3)
review4 = Review.create!(:content => "Don't trust this place! I got food poisoning the next day. Defintely the Pad Thai.", :rating => 1, :author_id => 3, :business_id => 3)

bizIndex1 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_1.jpg")
bizIndex2 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SH1.jpg")
bizIndex3 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE_01.jpg")

business1.index_picture.attach(io: bizIndex1, filename: "biz-idx1.jpg")
business2.index_picture.attach(io: bizIndex2, filename: "biz-idx2.jpg")
business3.index_picture.attach(io: bizIndex3, filename: "biz-idx3.jpg")