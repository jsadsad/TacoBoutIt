import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faTrash,
  faLightbulb,
  faSmileBeam,
  faCookie,
} from '@fortawesome/free-solid-svg-icons'
import { ReactionCreateContainer } from '../../tags/tag_create_container'

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)

    this.reviewDelete = this.reviewDelete.bind(this)
  }

  userLoggedIn() {
    if (this.props.currentUser !== null && this.props.currentUser !== undefined)
      return true
    return false
  }

  currentUserLoggedIn() {
    if (this.props.currentUser.id === this.props.review.authorId) return true
    return false
  }

  reviewEdit() {
    if (this.userLoggedIn()) {
      if (this.currentUserLoggedIn()) {
        return (
          <div className="review-edit">
            <Link
              className="review-edit-text"
              to={`/businesses/${this.props.review.businessId}/reviews/${this.props.review.id}/edit`}
            >
              Edit
            </Link>
          </div>
        )
      }
    }
  }

  reviewDelete() {
    if (this.userLoggedIn()) {
      if (this.currentUserLoggedIn()) {
        return (
          <div
            className="review-delete-can"
            onClick={() => {
              if (
                window.confirm('Are you sure you want to delete this review?')
              )
                this.props
                  .deleteReview(this.props.review)
                  .then(() => window.location.reload())
            }}
          >
            <FontAwesomeIcon
              className="fa-trash"
              icon={faTrash}
              color="black"
              size="sm"
              fixedWidth
            />
          </div>
        )
      }
    }
  }

  render() {
    const { review, author, currentUser } = this.props
    if (!review) return null
    if (!author) return null
    let reviewNumUseful
    let reviewNumFunny
    let reviewNumCool
    if (review.tag) {
      reviewNumUseful = review.tag.filter(
        (reaction) => reaction.useful === true
      ).length
      reviewNumFunny = review.tag.filter((reaction) => reaction.funny === true)
        .length
      reviewNumCool = review.tag.filter((reaction) => reaction.cool === true)
        .length
    }
    const starRating = (num) => {
      switch (num) {
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
          <div className="review-rating">
            {starRating(review.rating)}
            <div>
              {this.reviewDelete()}
              {this.reviewEdit()}
            </div>
          </div>
        </div>
        <div className="review-content">{review.content}</div>
        <div className="review-tags-container">
          {/* {currentUser === undefined ||
              currentUser.id === review.authorId ? ( */}
          <h6>
            <FontAwesomeIcon
              className="fa-light-bulb"
              icon={faLightbulb}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Useful 1`}
          </h6>
          <h6>
            <FontAwesomeIcon
              className="fa-light-bulb"
              icon={faSmileBeam}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Funny 2`}
          </h6>
          <h6>
            <FontAwesomeIcon
              className="fa-light-bulb"
              icon={faCookie}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Cool 3`}
          </h6>
          {/* ) : (
                ''
              )} */}
        </div>
      </div>
    )
  }
}

export default ReviewItem
