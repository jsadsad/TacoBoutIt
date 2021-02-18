import React from 'react'

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review } = this.props
    return (
      <div className="reviews-container">
        <div className="review-rating">{review.rating}</div>
        <div className="review-content">{review.content}</div>
      </div>
    )
  }
}

export default ReviewItem
