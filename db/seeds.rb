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
user2 = User.create!(:first_name => "Wer", :last_name => "Dough", :email => "yes@no.com", :age => 40, :location => "Seattle", :password => "123456")
user3 = User.create!(:first_name => "Queue", :last_name => "Tea", :email => "matcha@boba.com", :age => 49, :location => "Portland", :password => "passwordlol")
user4 = User.create!(:first_name => "Pete", :last_name => "Zah", :email => "pizzaguy@pineapple.com", :age => 18, :location => "Los Angeles", :password => "passwordbro")
user5 = User.create!(:first_name => "Dum", :last_name => "Pling", :email => "hargow@soy.com", :age => 25, :location => "New Orleans", :password => "teatime")

business1 = Business.create!(:name => "House of Prime Rib", :website => "https://www.houseofprimerib.net/", :category => "American (Traditional)", :address => "1906 Van Ness Ave", :city => "San Francisco", :state => "CA", :zip_code => 94109, :phone_number => "415-885-4605", :hours => "4:00 PM - 8:00 PM", :lat => 37.7934405903263, :lng => -122.42273256793617)
business2 = Business.create!(:name => "Spoon House Bakery and Restaurant", :website => "http://places.singleplatform.com/spoon-house/menu?ref=google", :category => "Italian", :address => "1601 W Redondo Beach Blvd", :city => "Gardena", :state => "CA", :zip_code => 90247, :phone_number => "(310) 538-0376", :hours => "11:00 AM - 9:00 PM", :lat => 33.89007225223046, :lng => -118.3048875687615)
business3 = Business.create!(:name => "Thai Elephant Express", :website => "https://zmenu.com/thai-elephant-express-san-jose-online-menu/", :category => "Thai", :address => "3005 Silver Creek Rd Ste 128", :city => "San Jose", :state => "CA", :zip_code => 95121, :phone_number => "(408) 528-8882", :hours => "10:00 AM - 8:00 PM", :lat => 37.30874462435048, :lng => -121.81341205217721)
business4 = Business.create!(:name => "Sushi Sam's Edomata", :website => "http://www.sushisams.com/", :category => "Japanese", :address => "218 E 3rd Ave", :city => "San Mateo", :state => "CA", :zip_code => 94401, :phone_number => "(650) 344-0888", :hours => "4:30 PM - 8:00 PM", :lat => 37.5651704769691, :lng => -122.3227604256077)
business5 = Business.create!(:name => "Seapot", :website => "http://www.seapotusa.com", :category => "Chinese", :address => "1952 S El Camino Real", :city => "San Mateo", :state => "CA", :zip_code => 94403, :phone_number => "(650) 315-2827", :hours => "5:00 PM - 9:00 PM", :lat => 37.54854277994115, :lng => -122.31088388472293)
business6 = Business.create!(:name => "Ohgane Korean Restaurant", :website => "http://www.ohgane.com", :category => "Korean", :address => "3915 Broadway", :city => "Oakland", :state => "CA", :zip_code => 94611, :phone_number => "(510) 594-8300", :hours => "11:00 AM - 9:00 PM", :lat => 37.82736310867334, :lng => -122.25747003372018)
business7 = Business.create!(:name => "Lardo", :website => "http://www.lardopdx.com", :category => "American (Traditional)", :address => "1212 SE Hawthorne St", :city => "Portland", :state => "OR", :zip_code => 97214, :phone_number => "(503) 234-7786", :hours => "11:00 AM - 10:00 PM", :lat => 45.51212095575145, :lng => -122.65298996453124)

review1 = Review.create!(:content => "Our steak was too overcooked. It was hard to chew and I spit it out!", :rating => 2, :author_id => 1, :business_id => 1)
review2 = Review.create!(:content => "Pasta was super gooood! The place followed COVID-19 guidelines", :rating => 5, :author_id => 4, :business_id => 2)
review3 = Review.create!(:content => "Mmmmm...pad thai is always the right choice.", :rating => 4, :author_id => 5, :business_id => 3)
review4 = Review.create!(:content => "Don't trust this place! I got food poisoning the next day. Defintely the Pad Thai.", :rating => 1, :author_id => 2, :business_id => 3)
review5 = Review.create!(:content => "Day always goes better with Thai tea.", :rating => 5, :author_id => 3, :business_id => 3)
review6 = Review.create!(:content => "It was too pricey. :( Food was okay but not worth.", :rating => 3, :author_id => 3, :business_id => 1)
review7 = Review.create!(:content => "Oh my god. That Toro literally melts in your mouth!!", :rating => 5, :author_id => 3, :business_id => 4)
review8 = Review.create!(:content => "Owner is super friendly. Gave us very friendly service!", :rating => 5, :author_id => 2, :business_id => 4)
review9 = Review.create!(:content => "Fresh seafood. Worth the wait. Worth the money!", :rating => 4, :author_id => 3, :business_id => 5)

# Business Index
bizIndex1 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_1.jpg")
bizIndex2 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SH1.jpg")
bizIndex3 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE_01.jpg")
bizIndex4 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SS_1.jpg")
business1.index_picture.attach(io: bizIndex1, filename: "biz-idx1.jpg")
business2.index_picture.attach(io: bizIndex2, filename: "biz-idx2.jpg")
business3.index_picture.attach(io: bizIndex3, filename: "biz-idx3.jpg")
business4.index_picture.attach(io: bizIndex4, filename: 'biz-idx4.jpg')

# House of Prime Rib
primeRib1 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_2.jpg")
primeRib2 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_3.jpg")
primeRib3 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_4.jpg")
primeRib4 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_5.jpg")
business1.pictures.attach(io: primeRib1, filename: "prime-rib-foodie1")
business1.pictures.attach(io: primeRib2, filename: "prime-rib-foodie2")
business1.pictures.attach(io: primeRib3, filename: "prime-rib-foodie3")
business1.pictures.attach(io: primeRib4, filename: "prime-rib-foodie4")

# Spoon House Bakery and Restaurant
spoonHouse1 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SH2.jpg")
spoonHouse2 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SH3.jpg")
spoonHouse3 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SH4.jpg")
spoonHouse4 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/SH5.jpg")
business2.pictures.attach(io: spoonHouse1, filename: "spoon-house-foodie1")
business2.pictures.attach(io: spoonHouse2, filename: "spoon-house-foodie2")
business2.pictures.attach(io: spoonHouse3, filename: "spoon-house-foodie3")
business2.pictures.attach(io: spoonHouse4, filename: "spoon-house-foodie4")

# Thai Elephant Express
thaiElephant1 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE2.jpg")
thaiElephant2 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE3.jpg")
thaiElephant3 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE4.jpg")
thaiElephant4 = open("https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE5.jpg")
business3.pictures.attach(io: thaiElephant1, filename: "thai-ele-foodie1")
business3.pictures.attach(io: thaiElephant2, filename: "thai-ele-foodie2")
business3.pictures.attach(io: thaiElephant3, filename: "thai-ele-foodie3")
business3.pictures.attach(io: thaiElephant4, filename: "thai-ele-foodie4")