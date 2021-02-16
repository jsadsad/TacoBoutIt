import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.review
    }

    render() {
        return (
            <div>This is the review form</div>
        )
    }
}

export default ReviewForm 