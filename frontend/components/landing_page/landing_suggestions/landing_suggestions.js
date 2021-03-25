import React from 'react'
import { Link } from 'react-router-dom'

const LandingSuggestions = () => (
  <div>
    <div className="landing-suggestions-container">
      <div className="landing-suggestion-title">Explore New Businesses</div>
      <div className="landing-suggestion-index">
        <div className="landing-suggestion-category">
          <Link to="/businesses">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/Restaurant_Splash.jpg"></img>
          </Link>
          <div>
            <p className="landing-suggestions-caption">Businesses</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses/thai">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/splash/khai_soi.jpeg"></img>
          </Link>
          <div>
            <p className="landing-suggestions-caption">Thai</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses/japanese">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/splash/splash_japanese.jpeg" />
          </Link>
          <div>
            <p className="landing-suggestions-caption">Japanese</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses/korean">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/splash/splash_korean.jpeg" />
          </Link>
          <div>
            <p className="landing-suggestions-caption">Korean</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses/chinese">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/splash/splash_chinese.jpeg" />
          </Link>
          <div>
            <p className="landing-suggestions-caption">Chinese</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses/tea">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/splash/splash_boba.jpeg" />
          </Link>
          <div>
            <p className="landing-suggestions-caption">Tea</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LandingSuggestions
