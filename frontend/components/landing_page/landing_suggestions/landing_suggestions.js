import React from 'react'
import { Link } from 'react-router-dom'

const LandingSuggestions = () => (
  <div>
    <div className="landing-suggestions-container">
      <div className="landing-suggestion-title">Hot & New Businesses</div>
      <div className="landing-suggestion-index">
        <div className="landing-suggestion-category">
          <Link to="/businesses">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/Restaurant_Splash.jpg"></img>
          </Link>
          <div>
            <p className="landing-suggestions-caption">Resturants</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/Night_Life.jpeg"></img>
          </Link>
          <div>
            <p className="landing-suggestions-caption">Night Life</p>
          </div>
        </div>
        <div className="landing-suggestion-category">
          <Link to="/businesses">
            <img src="https://tbi-seeds.s3-us-west-1.amazonaws.com/Shopping.jpeg" />
          </Link>
          <div>
            <p className="landing-suggestions-caption">Shopping</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LandingSuggestions
