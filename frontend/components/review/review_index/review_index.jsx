import React from 'react'

class ReviewIndex extends React.Component {
    componentDidMount() {
        this.props.fetchReviews(this.props.business.id)
    }

    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.props.reviews).map(review => (
                        <div key={review.id}>
                            <li>{review.authorId.first_name}</li>
                            <li>{review.content}</li>
                            <li>{review.rating}</li>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex 