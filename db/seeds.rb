require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all
ReviewTag.destroy_all

ActiveRecord::Base
  .connection
  .tables
  .each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) }

user1 =
  User.create!(
    first_name: 'Souper',
    last_name: 'Hero',
    email: 'test@example.com',
    age: 30,
    location: 'San Francisco',
    password: 'password',
  )
user2 =
  User.create!(
    first_name: 'Mac',
    last_name: 'Roni',
    email: 'yes@no.com',
    age: 40,
    location: 'Seattle',
    password: '123456',
  )
user3 =
  User.create!(
    first_name: 'Queue',
    last_name: 'Tea',
    email: 'matcha@boba.com',
    age: 49,
    location: 'Portland',
    password: 'passwordlol',
  )
user4 =
  User.create!(
    first_name: 'Pete',
    last_name: 'Zah',
    email: 'pizzaguy@pineapple.com',
    age: 18,
    location: 'Los Angeles',
    password: 'passwordbro',
  )
user5 =
  User.create!(
    first_name: 'Doom',
    last_name: 'Pling',
    email: 'hargow@soy.com',
    age: 25,
    location: 'New Orleans',
    password: 'teatime',
  )
user6 =
  User.create!(
    first_name: 'Av',
    last_name: 'Cado',
    email: 'acado@keto.com',
    age: 15,
    location: 'Las Vegas',
    password: 'cadocado',
  )
user7 =
  User.create!(
    first_name: 'Sash',
    last_name: 'Imi',
    email: 'toro@yum.com',
    age: 28,
    location: 'Dallas',
    password: 'yumyum21',
  )

business1 =
  Business.create!(
    name: 'House of Prime Rib',
    website: 'https://www.houseofprimerib.net/',
    category: 'American (Traditional)',
    address: '1906 Van Ness Ave',
    city: 'San Francisco',
    state: 'CA',
    zip_code: 94_109,
    phone_number: '415-885-4605',
    hours: '4:00 PM - 8:00 PM',
    lat: 37.7934405903263,
    lng: -122.42273256793617,
  )
business2 =
  Business.create!(
    name: 'Spoon House Bakery and Restaurant',
    website: 'http://places.singleplatform.com/spoon-house/menu?ref=google',
    category: 'Italian',
    address: '1601 W Redondo Beach Blvd',
    city: 'Gardena',
    state: 'CA',
    zip_code: 90_247,
    phone_number: '(310) 538-0376',
    hours: '11:00 AM - 9:00 PM',
    lat: 33.89007225223046,
    lng: -118.3048875687615,
  )
business3 =
  Business.create!(
    name: 'Thai Elephant Express',
    website: 'https://zmenu.com/thai-elephant-express-san-jose-online-menu/',
    category: 'Thai',
    address: '3005 Silver Creek Rd Ste 128',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_121,
    phone_number: '(408) 528-8882',
    hours: '10:00 AM - 8:00 PM',
    lat: 37.30874462435048,
    lng: -121.81341205217721,
  )
business4 =
  Business.create!(
    name: "Sushi Sam's Edomata",
    website: 'http://www.sushisams.com/',
    category: 'Japanese',
    address: '218 E 3rd Ave',
    city: 'San Mateo',
    state: 'CA',
    zip_code: 94_401,
    phone_number: '(650) 344-0888',
    hours: '4:30 PM - 8:00 PM',
    lat: 37.5651704769691,
    lng: -122.3227604256077,
  )
business5 =
  Business.create!(
    name: 'Seapot',
    website: 'http://www.seapotusa.com',
    category: 'Chinese',
    address: '1952 S El Camino Real',
    city: 'San Mateo',
    state: 'CA',
    zip_code: 94_403,
    phone_number: '(650) 315-2827',
    hours: '5:00 PM - 9:00 PM',
    lat: 37.54854277994115,
    lng: -122.31088388472293,
  )
business6 =
  Business.create!(
    name: 'Ohgane Korean Restaurant',
    website: 'http://www.ohgane.com',
    category: 'Korean',
    address: '3915 Broadway',
    city: 'Oakland',
    state: 'CA',
    zip_code: 94_611,
    phone_number: '(510) 594-8300',
    hours: '11:00 AM - 9:00 PM',
    lat: 37.82736310867334,
    lng: -122.25747003372018,
  )
business7 =
  Business.create!(
    name: 'Lardo',
    website: 'http://www.lardopdx.com',
    category: 'American (Traditional)',
    address: '1212 SE Hawthorne St',
    city: 'Portland',
    state: 'OR',
    zip_code: 97_214,
    phone_number: '(503) 234-7786',
    hours: '11:00 AM - 10:00 PM',
    lat: 45.51212095575145,
    lng: -122.65298996453124,
  )
business8 =
  Business.create!(
    name: 'Ding Tea',
    website: 'http://www.dingtea.club',
    category: 'Coffee & Tea',
    address: '8280 Mira Mesa Ste C',
    city: 'San Diego',
    state: 'CA',
    zip_code: 92_126,
    phone_number: '(503) 234-7786',
    hours: '11:00 AM - 10:00 PM',
    lat: 32.91477967186302,
    lng: -117.14616578152645,
  )
business9 =
  Business.create!(
    name: 'Kenzo Sushi',
    website: 'https://www.kenzosushisanjose.com/',
    category: 'Japanese',
    address: '5465 Snell Ave',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_123,
    phone_number: '(408) 226-2114',
    hours: '11:30 AM - 8:15 PM',
    lat: 37.25449341305017,
    lng: -121.83108702901548,
  )
business10 =
  Business.create!(
    name: 'Jang Su Jang',
    website: 'http://jangsujang.com/santa-clara/',
    category: 'Korean',
    address: '3561 El Camino Real Ste 10',
    city: 'Santa Clara',
    state: 'CA',
    zip_code: 95_051,
    phone_number: '(408) 246-1212',
    hours: '11:00 AM - 9:00 PM',
    lat: 37.35376522070469,
    lng: -121.99454923692473,
  )
business11 =
  Business.create!(
    name: 'Koi Palace',
    website: 'https://koipalace.com/milpitas-ca',
    category: 'Chinese',
    address: '768 Barber Ln',
    city: 'Santa Clara',
    state: 'CA',
    zip_code: 95_035,
    phone_number: '(408) 432-8833',
    hours: '11:00 AM - 2:30 PM',
    lat: 37.419490026337776,
    lng: -121.9156473866544,
  )
business12 =
  Business.create!(
    name: 'House of Thai',
    website: 'houseofthaisf.com',
    category: 'Thai',
    address: '901 Larkin St',
    city: 'San Francisco',
    state: 'CA',
    zip_code: 94_109,
    phone_number: '(415) 441-2248',
    hours: '11:00 AM - 10:00 PM',
    lat: 37.786324774832956,
    lng: -122.4185314210328,
  )
business13 =
  Business.create!(
    name: 'Boba Guys',
    website: 'bobaguys.com',
    category: 'Coffee & Tea',
    address: '429 Stockton St',
    city: 'San Francisco',
    state: 'CA',
    zip_code: 94_108,
    phone_number: '(415) 967-2622',
    hours: '11:00 AM - 5:00 PM',
    lat: 37.79000337975663,
    lng: -122.4073974615103,
  )
business14 =
  Business.create!(
    name: 'Teaspoon',
    website: 'teaspoonlife.com',
    category: 'Coffee & Tea',
    address: '2125 Polk St',
    city: 'San Francisco',
    state: 'CA',
    zip_code: 94_109,
    phone_number: '(415) 872-9245',
    hours: '11:00 AM - 9:00 PM',
    lat: 37.7963392912213,
    lng: -122.42225576153862,
  )
business15 =
  Business.create!(
    name: 'Gen Korean BBQ',
    website: 'gendelivers.com',
    category: 'Korean',
    address: '1628 Hostetter Rd Ste F',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_131,
    phone_number: '(408) 477-2773',
    hours: '11:00 AM - 10:00 PM',
    lat: 37.387426925622364,
    lng: -121.88509645414914,
  )
business16 =
  Business.create!(
    name: 'Gombei',
    website: 'qpotsanjose.com',
    category: 'Japanese',
    address: '193 Jackson St',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_112,
    phone_number: '(408) 279-4311',
    hours: '4:30 PM - 7:00 PM',
    lat: 37.34892820879268,
    lng: -121.89498770572658,
  )
business17 =
  Business.create!(
    name: 'QPOT',
    website: 'qpotsanjose.com',
    category: 'Chinese',
    address: '1610 E Capitol Expy',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_121,
    phone_number: '(669) 234-3095',
    hours: '11:00 AM - 10:00 PM',
    lat: 37.30590638767442,
    lng: -121.811951105359,
  )
business18 =
  Business.create!(
    name: 'Dumpling Kitchen',
    website: 'dumplingkitchenca.com',
    category: 'Chinese',
    address: '1935 Taraval St',
    city: 'San Francisco',
    state: 'CA',
    zip_code: 94_116,
    phone_number: '(415) 682-8938',
    hours: '11:00 AM - 9:00 PM',
    lat: 37.74234826382537,
    lng: -122.48706985969028,
  )
business19 =
  Business.create!(
    name: 'Soyful Desserts',
    website: 'https://zmenu.com/soyful-desserts-san-jose-2-online-menu/',
    category: 'Coffee & Tea',
    address: '999 Story Rd Unit 9048',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_122,
    phone_number: '(408) 216-9026',
    hours: '12:00 PM - 10:00 PM',
    lat: 37.3320671798462,
    lng: -121.85706311921996,
  )
business20 =
  Business.create!(
    name: 'A Bellagio Italian Restaurant',
    website: 'abellagio.com',
    category: 'Italian',
    address: '33 S Central Ave',
    city: 'Campbell',
    state: 'CA',
    zip_code: 95_008,
    phone_number: '(408) 370-7705',
    hours: '5:00 PM - 9:00 PM',
    lat: 37.28653989970948,
    lng: -121.94410600572799,
  )
business21 =
  Business.create!(
    name: "Maggiano's Little Italy",
    website: 'locations.maggianos.com',
    category: 'Italian',
    address: '3055 Olin Ave Ste 1000',
    city: 'San Jose',
    state: 'CA',
    zip_code: 95_128,
    phone_number: '(408) 423-8973',
    hours: '11:00 AM - 10:00 PM',
    lat: 37.32075052268578,
    lng: -121.94967174435664,
  )

review1 =
  Review.create!(
    content:
      'Our steak was too overcooked. It was hard to chew and I spit it out!',
    rating: 2,
    author_id: 1,
    business_id: 1,
  )
review2 =
  Review.create!(
    content: 'Pasta was super gooood! The place followed COVID-19 guidelines',
    rating: 5,
    author_id: 4,
    business_id: 2,
  )
review3 =
  Review.create!(
    content: 'Mmmmm...pad thai is always the right choice.',
    rating: 4,
    author_id: 5,
    business_id: 3,
  )
review4 =
  Review.create!(
    content:
      "Don't trust this place! I got food poisoning the next day. Defintely the Pad Thai.",
    rating: 1,
    author_id: 2,
    business_id: 3,
  )
review5 =
  Review.create!(
    content: 'Day always goes better with Thai tea.',
    rating: 5,
    author_id: 3,
    business_id: 3,
  )
review6 =
  Review.create!(
    content: 'It was too pricey. :( Food was okay but not worth.',
    rating: 3,
    author_id: 3,
    business_id: 1,
  )
review7 =
  Review.create!(
    content: 'Oh my god. That Toro literally melts in your mouth!!',
    rating: 5,
    author_id: 3,
    business_id: 4,
  )
review8 =
  Review.create!(
    content: 'Owner is super friendly. Gave us very friendly service!',
    rating: 5,
    author_id: 2,
    business_id: 4,
  )
review9 =
  Review.create!(
    content: 'Fresh seafood. Worth the wait. Worth the money!',
    rating: 4,
    author_id: 3,
    business_id: 5,
  )
review10 =
  Review.create!(
    content: 'Great drinks! Boba latte is my favorite.',
    rating: 4,
    author_id: 3,
    business_id: 8,
  )
review11 =
  Review.create!(
    content: 'Good burgers. Good for lunch.',
    rating: 4,
    author_id: 1,
    business_id: 7,
  )
review12 =
  Review.create!(
    content: 'Great place to go on a Friday night. Worth the wait!',
    rating: 5,
    author_id: 5,
    business_id: 6,
  )
review13 =
  Review.create!(
    content: 'Yum yum yum :)',
    rating: 4,
    author_id: 2,
    business_id: 8,
  )
review14 =
  Review.create!(
    content: 'Never a bad place to eat.',
    rating: 5,
    author_id: 5,
    business_id: 7,
  )
review15 =
  Review.create!(
    content: 'Definitely would come back. Yuuuuuum.',
    rating: 5,
    author_id: 1,
    business_id: 10,
  )
review16 =
  Review.create!(
    content: 'Food was good, but the service was really slow. Meh.',
    rating: 2,
    author_id: 2,
    business_id: 11,
  )
review17 =
  Review.create!(
    content:
      'Love the atmosphere. Definitely feels welcoming and service was great',
    rating: 4,
    author_id: 7,
    business_id: 12,
  )
review18 =
  Review.create!(
    content:
      "I only got takeout, so can't say much about the ambiance or service, but food was good!",
    rating: 4,
    author_id: 7,
    business_id: 13,
  )
review19 =
  Review.create!(
    content: 'Gave me some stomach problems. Be warned',
    rating: 2,
    author_id: 3,
    business_id: 14,
  )
review20 =
  Review.create!(
    content:
      'Atmosphere kinda reminds me of fast food, but the food quality was great!',
    rating: 3,
    author_id: 4,
    business_id: 15,
  )
review21 =
  Review.create!(
    content: 'AYCE is always worth the money. Come with an empty stomach!',
    rating: 4,
    author_id: 4,
    business_id: 16,
  )
review22 =
  Review.create!(
    content:
      'Kind of small and definitely crowded on some days, but the soup dumplings are worth the wait!',
    rating: 4,
    author_id: 5,
    business_id: 17,
  )
review23 =
  Review.create!(
    content:
      'Service was poor and space was cramped. Food was good, but felt super rushed to leave the table.',
    rating: 2,
    author_id: 7,
    business_id: 17,
  )
review24 =
  Review.create!(
    content:
      "Sad the convetors aren't working yet because of Covid, but the food is amazing and love that you get your own personal hot pot base.",
    rating: 4,
    author_id: 3,
    business_id: 5,
  )
review25 =
  Review.create!(
    content:
      'Definitely order over the phone for pickup. They always seem to be busy. I recommend the pad see ew!',
    rating: 3,
    author_id: 1,
    business_id: 3,
  )
review26 =
  Review.create!(
    content: 'Pasta was good. Needs more sauce though!',
    rating: 3,
    author_id: 7,
    business_id: 21,
  )
review27 =
  Review.create!(
    content: 'Yum! So good! Worth the wait. You should reserve!!',
    rating: 5,
    author_id: 6,
    business_id: 20,
  )
review28 =
  Review.create!(
    content: 'Never a bad time to get desserts!',
    rating: 5,
    author_id: 4,
    business_id: 19,
  )
review28 =
  Review.create!(
    content: 'Really long wait. :(',
    rating: 1,
    author_id: 1,
    business_id: 19,
  )
review29 =
  Review.create!(
    content: 'Noodles were bomb!',
    rating: 4,
    author_id: 3,
    business_id: 18,
  )
review29 =
  Review.create!(
    content: 'Noodles were bomb!',
    rating: 4,
    author_id: 3,
    business_id: 18,
  )
review30 =
  Review.create!(
    content:
      'Worst service I have ever received in my life! They forgot so many items!',
    rating: 1,
    author_id: 7,
    business_id: 15,
  )

reviewTag1 =
  ReviewTag.create(
    author_id: 2,
    review_id: 10,
    useful: true,
    funny: false,
    cool: true,
  )
reviewTag2 =
  ReviewTag.create(
    author_id: 5,
    review_id: 1,
    useful: true,
    funny: true,
    cool: false,
  )
reviewTag3 =
  ReviewTag.create(
    author_id: 3,
    review_id: 3,
    useful: true,
    funny: false,
    cool: false,
  )
reviewTag4 =
  ReviewTag.create(
    author_id: 4,
    review_id: 15,
    useful: false,
    funny: true,
    cool: true,
  )
reviewTag5 =
  ReviewTag.create(
    author_id: 5,
    review_id: 17,
    useful: false,
    funny: false,
    cool: true,
  )
reviewTag6 =
  ReviewTag.create(
    author_id: 1,
    review_id: 18,
    useful: false,
    funny: false,
    cool: true,
  )
reviewTag7 =
  ReviewTag.create(
    author_id: 2,
    review_id: 19,
    useful: false,
    funny: true,
    cool: false,
  )
reviewTag8 =
  ReviewTag.create(
    author_id: 6,
    review_id: 2,
    useful: true,
    funny: true,
    cool: true,
  )
reviewTag9 =
  ReviewTag.create(
    author_id: 7,
    review_id: 3,
    useful: false,
    funny: false,
    cool: true,
  )
reviewTag10 =
  ReviewTag.create(
    author_id: 7,
    review_id: 4,
    useful: true,
    funny: true,
    cool: false,
  )

# Business Index
bizIndex1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_1.jpg')
bizIndex2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SH1.jpg')
bizIndex3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE_01.jpg')
bizIndex4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SS_1.jpg')
bizIndex5 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SEAPOT/SP1.jpg')
bizIndex6 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/OHGANE/OHG1.jpg')
bizIndex7 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/LARDO/LARD1.jpg')
bizIndex8 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/DINGTEA/DT2.jpg')
bizIndex9 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/kenzo/kenzo_1.jpeg')
bizIndex10 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/jang_su_jang/jang_su_2.jpeg',
  )
bizIndex11 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/koi_palace/kp_1.jpeg')
bizIndex12 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/house_of_thai/1.jpg')
bizIndex13 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/boba_guys/bg_1.jpeg')
bizIndex14 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/teaspoon/1.jpg')
bizIndex15 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gen_kbbq/1.jpg')
bizIndex16 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gombei/o+(3).jpg')
bizIndex17 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/qpot/o+(1).jpg')
bizIndex18 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/dumpling_kitchen/o+(1).jpg',
  )
bizIndex19 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/soyful/o+(1).jpg')
bizIndex20 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/abellagio/o+(1).jpg')
bizIndex21 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/maggianos/o+(1).jpg')

business1.index_picture.attach(io: bizIndex1, filename: 'biz-idx1.jpg')
business2.index_picture.attach(io: bizIndex2, filename: 'biz-idx2.jpg')
business3.index_picture.attach(io: bizIndex3, filename: 'biz-idx3.jpg')
business4.index_picture.attach(io: bizIndex4, filename: 'biz-idx4.jpg')
business5.index_picture.attach(io: bizIndex5, filename: 'biz-idx5.jpg')
business6.index_picture.attach(io: bizIndex6, filename: 'biz-idx6.jpg')
business7.index_picture.attach(io: bizIndex7, filename: 'biz-idx7.jpg')
business8.index_picture.attach(io: bizIndex8, filename: 'biz-idx8.jpg')
business9.index_picture.attach(io: bizIndex9, filename: 'biz-idx9.jpg')
business10.index_picture.attach(io: bizIndex10, filename: 'biz-idx10.jpg')
business11.index_picture.attach(io: bizIndex11, filename: 'biz-idx11.jpg')
business12.index_picture.attach(io: bizIndex12, filename: 'biz-idx12.jpg')
business13.index_picture.attach(io: bizIndex13, filename: 'biz-idx13.jpg')
business14.index_picture.attach(io: bizIndex14, filename: 'biz-idx14.jpg')
business15.index_picture.attach(io: bizIndex15, filename: 'biz-idx15.jpg')
business16.index_picture.attach(io: bizIndex16, filename: 'biz-idx16.jpg')
business17.index_picture.attach(io: bizIndex17, filename: 'biz-idx17.jpg')
business18.index_picture.attach(io: bizIndex18, filename: 'biz-idx18.jpg')
business19.index_picture.attach(io: bizIndex19, filename: 'biz-idx19.jpg')
business20.index_picture.attach(io: bizIndex20, filename: 'biz-idx20.jpg')
business21.index_picture.attach(io: bizIndex21, filename: 'biz-idx21.jpg')

# House of Prime Rib
primeRib1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_2.jpg')
primeRib2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_3.jpg')
primeRib3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_4.jpg')
primeRib4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/HOPR_5.jpg')
business1.pictures.attach(io: primeRib1, filename: 'prime-rib-foodie1')
business1.pictures.attach(io: primeRib2, filename: 'prime-rib-foodie2')
business1.pictures.attach(io: primeRib3, filename: 'prime-rib-foodie3')
business1.pictures.attach(io: primeRib4, filename: 'prime-rib-foodie4')

# Spoon House Bakery and Restaurant
spoonHouse1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SH2.jpg')
spoonHouse2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SH3.jpg')
spoonHouse3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SH4.jpg')
spoonHouse4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SH5.jpg')
business2.pictures.attach(io: spoonHouse1, filename: 'spoon-house-foodie1')
business2.pictures.attach(io: spoonHouse2, filename: 'spoon-house-foodie2')
business2.pictures.attach(io: spoonHouse3, filename: 'spoon-house-foodie3')
business2.pictures.attach(io: spoonHouse4, filename: 'spoon-house-foodie4')

# Thai Elephant Express
thaiElephant1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE2.jpg')
thaiElephant2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE3.jpg')
thaiElephant3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE4.jpg')
thaiElephant4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/TEE5.jpg')
business3.pictures.attach(io: thaiElephant1, filename: 'thai-ele-foodie1')
business3.pictures.attach(io: thaiElephant2, filename: 'thai-ele-foodie2')
business3.pictures.attach(io: thaiElephant3, filename: 'thai-ele-foodie3')
business3.pictures.attach(io: thaiElephant4, filename: 'thai-ele-foodie4')

# Sushi Sam
sushiSam1 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SushiSam/SS_2.jpg')
sushiSam2 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SushiSam/SS_3.jpg')
sushiSam3 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SushiSam/SS_4.jpg')
sushiSam4 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SushiSam/SS_5.jpg')
business4.pictures.attach(io: sushiSam1, filename: 'sushi-sam-foodie1')
business4.pictures.attach(io: sushiSam2, filename: 'sushi-sam-foodie2')
business4.pictures.attach(io: sushiSam3, filename: 'sushi-sam-foodie3')
business4.pictures.attach(io: sushiSam4, filename: 'sushi-sam-foodie4')

# Seapot
seapot1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SEAPOT/SP2.jpg')
seapot2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SEAPOT/SP3.jpg')
seapot3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SEAPOT/SP4.jpg')
seapot4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/SEAPOT/SP5.jpg')
business5.pictures.attach(io: seapot1, filename: 'seapot-foodie1')
business5.pictures.attach(io: seapot2, filename: 'seapot-foodie2')
business5.pictures.attach(io: seapot3, filename: 'seapot-foodie3')
business5.pictures.attach(io: seapot4, filename: 'seapot-foodie4')

# Ohgane
ohgane1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/OHGANE/OHG2.jpg')
ohgane2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/OHGANE/OHG3.jpg')
ohgane3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/OHGANE/OHG4.jpg')
ohgane4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/OHGANE/OHG5.jpg')
business6.pictures.attach(io: ohgane1, filename: 'ohgane-foodie1')
business6.pictures.attach(io: ohgane2, filename: 'ohgane-foodie2')
business6.pictures.attach(io: ohgane3, filename: 'ohgane-foodie3')
business6.pictures.attach(io: ohgane4, filename: 'ohgane-foodie4')

# Lardo
lardo1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/LARDO/LARD2.jpg')
lardo2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/LARDO/LARD3.jpg')
lardo3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/LARDO/LARD4.jpg')
lardo4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/LARDO/LARD5.jpg')
business7.pictures.attach(io: lardo1, filename: 'lard-foodie1')
business7.pictures.attach(io: lardo2, filename: 'lard-foodie2')
business7.pictures.attach(io: lardo3, filename: 'lard-foodie3')
business7.pictures.attach(io: lardo4, filename: 'lard-foodie4')

# DingTea
dingTea1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/DINGTEA/DT1.jpg')
dingTea2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/DINGTEA/DT3.jpg')
dingTea3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/DINGTEA/DT4.jpg')
dingTea4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/DINGTEA/DT5.jpg')
business8.pictures.attach(io: dingTea1, filename: 'ding-foodie1')
business8.pictures.attach(io: dingTea2, filename: 'ding-foodie2')
business8.pictures.attach(io: dingTea3, filename: 'ding-foodie3')
business8.pictures.attach(io: dingTea4, filename: 'ding-foodie4')

# Kenzo Sushi
kenzo1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/kenzo/kenzo_2.jpeg')
kenzo2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/kenzo/kenzo_3.jpeg')
kenzo3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/kenzo/kenzo_4.jpeg')
kenzo4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/kenzo/kenzo_5.jpeg')
business9.pictures.attach(io: kenzo1, filename: 'kenzo-foodie1')
business9.pictures.attach(io: kenzo2, filename: 'kenzo-foodie2')
business9.pictures.attach(io: kenzo3, filename: 'kenzo-foodie3')
business9.pictures.attach(io: kenzo4, filename: 'kenzo-foodie4')

# Jang Su Jang
jsj1 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/jang_su_jang/jang_su_1.jpeg',
  )
jsj2 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/jang_su_jang/jang_su_3.jpeg',
  )
jsj3 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/jang_su_jang/jang_su_4.jpeg',
  )
jsj4 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/jang_su_jang/jang_su_5.jpeg',
  )
business10.pictures.attach(io: jsj1, filename: 'jsj-foodie1')
business10.pictures.attach(io: jsj2, filename: 'jsj-foodie2')
business10.pictures.attach(io: jsj3, filename: 'jsj-foodie3')
business10.pictures.attach(io: jsj4, filename: 'jsj-foodie4')

# Koi Palace
kp1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/koi_palace/kp_2.jpeg')
kp2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/koi_palace/kp_3.jpeg')
kp3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/koi_palace/kp_4.jpeg')
kp4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/koi_palace/kp_5.jpeg')
business11.pictures.attach(io: kp1, filename: 'kp-foodie1')
business11.pictures.attach(io: kp2, filename: 'kp-foodie2')
business11.pictures.attach(io: kp3, filename: 'kp-foodie3')
business11.pictures.attach(io: kp4, filename: 'kp-foodie4')

# House of Thai
houseThai1 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/house_of_thai/papayaSalad.jpg',
  )
houseThai2 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/house_of_thai/shukiyakiNoodles.jpg',
  )
houseThai3 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/house_of_thai/tomKha.jpg')
houseThai4 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/house_of_thai/veggieEggrolls.jpg',
  )
business12.pictures.attach(io: houseThai1, filename: 'houseThai-foodie1')
business12.pictures.attach(io: houseThai2, filename: 'houseThai-foodie2')
business12.pictures.attach(io: houseThai3, filename: 'houseThai-foodie3')
business12.pictures.attach(io: houseThai4, filename: 'houseThai-foodie4')

# Boba Guys
bobaguy1 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/boba_guys/bg_2.jpeg')
bobaguy2 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/boba_guys/bg_3.jpeg')
bobaguy3 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/boba_guys/bg_4.jpeg')
bobaguy4 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/boba_guys/bg_5.jpeg')
business13.pictures.attach(io: bobaguy1, filename: 'bobaguy-foodie1')
business13.pictures.attach(io: bobaguy2, filename: 'bobaguy-foodie2')
business13.pictures.attach(io: bobaguy3, filename: 'bobaguy-foodie3')
business13.pictures.attach(io: bobaguy4, filename: 'bobaguy-foodie4')

# Teaspoon
tspoon1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/teaspoon/2.jpg')
tspoon2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/teaspoon/3.jpg')
tspoon3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/teaspoon/4.jpg')
tspoon4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/teaspoon/o.jpg')
business14.pictures.attach(io: tspoon1, filename: 'tspoon-foodie1')
business14.pictures.attach(io: tspoon2, filename: 'tspoon-foodie2')
business14.pictures.attach(io: tspoon3, filename: 'tspoon-foodie3')
business14.pictures.attach(io: tspoon4, filename: 'tspoon-foodie4')

# Gen
gen1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gen_kbbq/o+(1).jpg')
gen2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gen_kbbq/o+(2).jpg')
gen3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gen_kbbq/o+(3).jpg')
gen4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gen_kbbq/o.jpg')
business15.pictures.attach(io: gen1, filename: 'gen-foodie1')
business15.pictures.attach(io: gen2, filename: 'gen-foodie2')
business15.pictures.attach(io: gen3, filename: 'gen-foodie3')
business15.pictures.attach(io: gen4, filename: 'gen-foodie4')

# Gombei
gombei1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gombei/o+(1).jpg')
gombei2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gombei/o+(2).jpg')
gombei3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gombei/o+(4).jpg')
gombei4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/gombei/o.jpg')
business16.pictures.attach(io: gombei1, filename: 'gom-foodie1')
business16.pictures.attach(io: gombei2, filename: 'gom-foodie2')
business16.pictures.attach(io: gombei3, filename: 'gom-foodie3')
business16.pictures.attach(io: gombei4, filename: 'gom-foodie4')

# QPOT
qpot1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/qpot/o+(2).jpg')
qpot2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/qpot/o+(3).jpg')
qpot3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/qpot/o+(4).jpg')
qpot4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/qpot/o.jpg')
business17.pictures.attach(io: qpot1, filename: 'qpot-foodie1')
business17.pictures.attach(io: qpot2, filename: 'qpot-foodie2')
business17.pictures.attach(io: qpot3, filename: 'qpot-foodie3')
business17.pictures.attach(io: qpot4, filename: 'qpot-foodie4')

# Dumpling Kitchen
dk1 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/dumpling_kitchen/o+(2).jpg',
  )
dk2 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/dumpling_kitchen/o+(3).jpg',
  )
dk3 =
  open(
    'https://tbi-seeds.s3-us-west-1.amazonaws.com/dumpling_kitchen/o+(5).jpg',
  )
dk4 =
  open('https://tbi-seeds.s3-us-west-1.amazonaws.com/dumpling_kitchen/o.jpg')
business18.pictures.attach(io: dk1, filename: 'dk-foodie1')
business18.pictures.attach(io: dk2, filename: 'dk-foodie2')
business18.pictures.attach(io: dk3, filename: 'dk-foodie3')
business18.pictures.attach(io: dk4, filename: 'dk-foodie4')

# Soyful
soy1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/soyful/o+(2).jpg')
soy2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/soyful/o+(3).jpg')
soy3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/soyful/o+(4).jpg')
soy4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/soyful/o.jpg')
business19.pictures.attach(io: soy1, filename: 'soyful-foodie1')
business19.pictures.attach(io: soy2, filename: 'soyful-foodie2')
business19.pictures.attach(io: soy3, filename: 'soyful-foodie3')
business19.pictures.attach(io: soy4, filename: 'soyful-foodie4')

# Bellagio
bell1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/abellagio/o+(2).jpg')
bell2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/abellagio/o+(3).jpg')
bell3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/abellagio/o+(5).jpg')
bell4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/abellagio/o.jpg')
business20.pictures.attach(io: bell1, filename: 'bellagio-foodie1')
business20.pictures.attach(io: bell2, filename: 'bellagio-foodie2')
business20.pictures.attach(io: bell3, filename: 'bellagio-foodie3')
business20.pictures.attach(io: bell4, filename: 'bellagio-foodie4')

# Maggiano's
mag1 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/maggianos/o+(2).jpg')
mag2 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/maggianos/o+(3).jpg')
mag3 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/maggianos/o+(4).jpg')
mag4 = open('https://tbi-seeds.s3-us-west-1.amazonaws.com/maggianos/o.jpg')
business21.pictures.attach(io: mag1, filename: 'maggiano-foodie1')
business21.pictures.attach(io: mag2, filename: 'maggiano-foodie2')
business21.pictures.attach(io: mag3, filename: 'maggiano-foodie3')
business21.pictures.attach(io: mag4, filename: 'maggiano-foodie4')
