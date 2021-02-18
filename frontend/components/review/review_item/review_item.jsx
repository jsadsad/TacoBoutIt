import React from 'react'

const ReviewItem = (props) => {
  //need to get review's user first_name and last_name

  return (
    <div className>
      <div>{props.review.content}</div>
      <div>{props.review.rating}</div>
    </div>
  )
}

// <ReviewList />

export default ReviewItem
