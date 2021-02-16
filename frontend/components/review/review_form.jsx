import React from 'react'
import { Link } from 'react-router-dom'
import NavbarContainer from '../navbar/navbar_container'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: this.props.review.content,
            rating: this.props.review.rating,
            author_id: this.props.currentUserId,
            business_id: this.props.businessId,
            reviewId: this.props.reviewId
        }
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleField(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
    }

    render() {
        const { business } = this.props
        if (!business) return (<h1>Loading...</h1>)

        return (
            <div>
                <NavbarContainer />
                <div>
                    <Link to={`/businesses/${business.id}`}>{business.name}</Link>
                </div>
            </div>
        )
    }
}

export default ReviewForm 