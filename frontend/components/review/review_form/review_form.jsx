import React from 'react'
import { Link } from 'react-router-dom'
import NavbarContainer from '../../navbar/NavbarContainer'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: this.props.review.content,
      rating: this.props.review.rating,
      author_id: this.props.currentUserId,
      business_id: this.props.businessId,
      reviewId: this.props.reviewId,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props
      .processForm(this.state)
      .then(() =>
        this.props.history.push(`/businesses/${this.props.businessId}`)
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

export default ReviewForm
