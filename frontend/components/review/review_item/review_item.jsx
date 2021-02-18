import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review } = this.props

    const starRating = (n) => {
      switch (n) {
        case 1:
          return (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
            </div>
          )
        case 2:
          return (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
            </div>
          )
        case 3:
          return (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
            </div>
          )
        case 4:
          return (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
            </div>
          )
        case 5:
          return (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={faStar}
                color="tomato"
                size="sm"
                fixedWidth
              />
            </div>
          )
        default:
          return <div></div>
      }
    }
    return (
      <div className="reviews-container">
        <div>{review.authorId}</div>
        <div className="review-rating">{starRating(review.rating)}</div>
        <div className="review-content">{review.content}</div>
      </div>
    )
  }
}

export default ReviewItem
