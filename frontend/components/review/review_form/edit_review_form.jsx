import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'
import { Link } from 'react-router-dom'

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.review,
      rating: this.props.review,
      userId: this.props.userId,
      businessId: this.props.match.params.businessId,
      id: this.props.match.params.reviewId,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
    this.props.fetchReviews(this.props.match.params.businessId).then(() => {
      this.setState({
        content: this.props.review ? this.props.review.content : '',
        rating: this.props.review ? this.props.review.rating : '',
        userId: this.props.userId ? this.props.userId : '',
        businessId: this.props.match.params.businessId
          ? parseInt(this.props.match.params.businessId)
          : '',
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props
      .updateReview(this.state)
      .then(() =>
        this.props.history.push(`/businesses/${this.state.businessId}`)
      )
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <ul>
          {this.props.errors.slice(0, 1).map((error, idx) => (
            <li className="review-error" key={`error-${idx}`}>
              {' '}
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }

  render() {
    const { business } = this.props
    if (!business) return <h1>Loading...</h1>
    return (
      <div>
        <NavbarContainer />
        <div className="review-form-container">
          <div className="review-form-business-name">
            <Link
              to={`/businesses/${business.id}`}
              className="review-form-business-name-text"
            >
              {business.name}
            </Link>
          </div>
          <span className="review-form-guidelines">
            Please read our review guidelines.
          </span>
          <div>
            <form onSubmit={this.handleSubmit}>
              <p className="form-rating-text">Select your rating</p>
              <input
                type="number"
                min="1"
                max="5"
                value={this.state.rating}
                onChange={this.handleField('rating')}
              />
              <div className="review-content-box">
                <textarea
                  className="review-textarea"
                  placeholder="It’s amazing that they’ve added delivery due to COVID. The delivery wasn’t perfect—they forgot one of my side dishes—but I understand this is a new operation for them at this time. Even so, the burrito was delicious and more than made up for it!"
                  value={this.state.content}
                  onChange={this.handleField('content')}
                ></textarea>
              </div>
              <div>{this.renderErrors()}</div>
              <button
                className="review-submit-click"
                onClick={this.handleSubmit}
                type="submit"
              >
                {this.props.formType}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditReviewForm
