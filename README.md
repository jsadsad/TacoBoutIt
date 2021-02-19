# TacoBoutIt

[Live!](http://tacobout-it.herokuapp.com/#/)

TacoBoutIt is a clone project of Yelp. I have created funtionality such as User Auth, visting Business pages, and creating unique Reviews under each Business.

## Technologies Used

- Ruby on Rails
- AWS S3
- PostgresSql
- Redux
- JavaScript
- React
- HTML
- CSS
- FontAwesome
- Google Maps API

## Features

1. User Authentication

TacoBoutIt has a User authentication system which allows users to create their account and have access to the features only available once you are logged in.

![TBI-Signup-Page](app/images/TBI-Signup-Page.png)

2. Business Index and Show Pages

A TacoBoutIt Business Page has set of photos of that is being hosted on AWS S3. It uses Google API that pin points exactly where the restaurant is located based on longitude and latitude.

![TBI-Business-Index](app/images/TBI-Business-Index.png)
![TBI-Business-Show](app/images/TBI-Business-Show.png)

3. Reviews (Creating and Reading)

You can go onto business showpages and look for the restaurants you've been to and create business reviews. The TacoBoutIt reviews will get posted up onto the business showpage.

![TBI-Reviews-New](app/images/TBI-Reviews-New.png)
![TBI-Reviews-Show](app/images/TBI-Reviews-Show.png)

4. Google Maps

TacoBoutIt uses the Google Maps API that points where the restaurant is located based on latitude and longitude.

# Future Ideas

- [] Update and Delete Reviews
- [] Categories
- [] Profile Page for Users
- [] Review Count
