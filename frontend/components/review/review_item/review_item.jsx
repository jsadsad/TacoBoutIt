import React from 'react'
import ReviewTagCreateContainer from '../../tags/tag_create_container'
import ReviewTagUpdateContainer from '../../tags/tag_update_container'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faTrash,
  faLightbulb,
  faSmileBeam,
  faCookie,
} from '@fortawesome/free-solid-svg-icons'

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    this.reviewDelete = this.reviewDelete.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { fetchReviews, business, review } = this.props
    let didUpdate =
      this.props.coolSum !== prevProps.coolSum ||
      this.props.usefulSum !== prevProps.usefulSum ||
      this.props.funnySum !== prevProps.funnySum

    if (review.tagCount && prevProps.review.tagCount && didUpdate) {
      fetchReviews(business.id)
    }
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

  starRating(num) {
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

  render() {
    const { review, author, currentUser } = this.props
    const createdAt = new Date(review.createdAt).toLocaleDateString()
    if (!review || !author) return null
    let reviewNumUseful
    let reviewNumFunny
    let reviewNumCool

    if (review.tagCount) {
      reviewNumUseful = review.tagCount.filter((tag) => tag.useful === true)
        .length
      reviewNumFunny = review.tagCount.filter((tag) => tag.funny === true)
        .length
      reviewNumCool = review.tagCount.filter((tag) => tag.cool === true).length
    }

    return (
      <div className="reviews-container">
        <div className="review-avatar-author">
          <img
            loading="lazy"
            className="avatar"
            src="https://tbi-seeds.s3-us-west-1.amazonaws.com/taco_avatar.png"
          />
          <div className="review-author">
            {author.firstName} {author.lastName}
            <div className="review-author-location">{author.location}</div>
            <div className="review-createdAt">{createdAt}</div>
          </div>
          <div className="review-rating">
            {this.starRating(review.rating)}
            <div>
              {this.reviewDelete()}
              {this.reviewEdit()}
            </div>
          </div>
        </div>
        <div className="review-content">{review.content}</div>
        <div className="review-tags-container">
          {currentUser &&
          review.currentUserTags &&
          review.currentUserTags.length === 0 &&
          review.authorId !== currentUser.id ? (
            <ReviewTagCreateContainer
              reviewId={review.id}
              usefulSum={reviewNumUseful}
              funnySum={reviewNumFunny}
              coolSum={reviewNumCool}
            />
          ) : (
            ''
          )}
          {currentUser &&
          review.currentUserTags &&
          review.currentUserTags.length > 0 &&
          review.authorId !== currentUser.id ? (
            <ReviewTagUpdateContainer
              tag={review.currentUserTags[0]}
              review={review}
              usefulSum={reviewNumUseful}
              funnySum={reviewNumFunny}
              coolSum={reviewNumCool}
            />
          ) : (
            <div></div>
          )}
          {currentUser === undefined || currentUser.id === review.authorId ? (
            <div className="cur-amounts">
              <div className="fa-div">
                <FontAwesomeIcon
                  className="cur-fa-icon"
                  icon={faLightbulb}
                  color="salmon"
                  size="sm"
                  fixedWidth
                />
                <span className="cur-amounts-text">{`Useful ${reviewNumUseful}`}</span>
              </div>
              <div className="fa-div">
                <FontAwesomeIcon
                  className="cur-fa-icon"
                  icon={faSmileBeam}
                  color="lime"
                  size="sm"
                  fixedWidth
                />
                <span className="cur-amounts-text">{`Funny ${reviewNumFunny}`}</span>
              </div>
              <div className="fa-div">
                <FontAwesomeIcon
                  className="cur-fa-icon"
                  icon={faCookie}
                  color="chocolate"
                  size="sm"
                  fixedWidth
                />
                <span className="cur-amounts-text">{`Cool ${reviewNumCool}`}</span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    )
  }
}

export default ReviewItem
