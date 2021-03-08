import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  reviewEditandDelete() {
    if (this.props.currentUser !== null && this.props.currentUser) {
      if (this.props.currentUser.id === this.props.review.authorId) {
        return <div className="edit-delete-button">Edit or Delete?</div>
      }
    }
  }

  render() {
    const { review, author } = this.props
    if (!review) return null
    if (!author) return null
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
        <div className="review-avatar-author">
          <img
            className="avatar"
            src="https://tbi-seeds.s3-us-west-1.amazonaws.com/taco_avatar.png"
          />
          <div className="review-author">
            {author.firstName} {author.lastName}
            <div className="review-author-location">{author.location}</div>
          </div>
          <div className="review-rating">{starRating(review.rating)}</div>
        </div>
        <div className="review-content">{review.content}</div>
        {this.reviewEditandDelete()}
      </div>
    )
  }
}

export default ReviewItem
