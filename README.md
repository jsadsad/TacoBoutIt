# TacoBoutIt

[Live!](http://tacobout-it.herokuapp.com/#/)

TacoBoutIt is a clone project of Yelp.

I have created functionality such as User Auth, visiting Business pages, creating unique Reviews, and Tagging Reviews

## Technologies Used

- Ruby on Rails
- AWS S3
- PostgreSQL
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

A Business `show` component contains information about Users, Business, and Reviews making it the main component of the entire the application.

```
const mapStateToProps = (state, { match }) => {
  const users = state.entities.users
  const businessId = parseInt(match.params.businessId)
  const business = selectBusiness(state.entities, businessId)
  const reviews = getReviewsForBusiness(state, { businessId })
  return {
    businessId,
    business,
    reviews,
    users,
  }
}
```

![TBI-Business-Index](app/images/TBI-Business-Index.png)
![TBI-Business-Show](app/images/TBI-Business-Show.png)

3. Reviews (Creating and Reading)

You can go onto business showpages and look for the restaurants you've been to and create business reviews. The TacoBoutIt reviews will get posted up onto the business showpage.

![TBI-Reviews-New](app/images/TBI-Reviews-New.png)
![TBI-Reviews-Show](app/images/TBI-Reviews-Show.png)

Reviews are uniquely displayed on their business using a `selector`

```
export const getReviewsForBusiness = (state, ownProps) => {
  return Object.values(state.entities.reviews).filter(
    (review) => review.businessId == ownProps.businessId
  )
}
```

4. Google Maps

TacoBoutIt uses the Google Maps API that points where the restaurant is located based on latitude and longitude.

```
class BusinessMap extends React.Component {
  constructor(props) {
    super(props)
  }

  mapOptions() {
    if (this.props.business) {
      return {
        center: {
          lat: this.props.business.lat,
          lng: this.props.business.lng,
        },
        zoom: 15,
        fullScreen: false,
        clickableIcons: false,
        disableDefaultUI: true,
        draggable: false,
        streetViewControl: false,
        mapTypeControl: false,
        gestureHandling: 'none',
        fullscreenControl: false,
      }
    } else {
      return {
        center: { lat: 37.773972, lng: -122.431297 },
        zoom: 13,
      }
    }
  }
```

# Future Ideas

- [ ] Update and Delete Reviews
- [ ] Categories for reviews
- [ ] Profile Page for Users
- [ ] Review Count
