import React from 'react'

class ReviewTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review_id: this.props.reviewId,
      useful: false,
      funny: false,
      cool: false,
    }
    this.handleUseful = this.handleUseful.bind(this)
    this.handleFunny = this.handleFunny.bind(this)
    this.handleCool = this.handleCool.bind(this)
  }

  handleUseful(e) {
    e.preventDefault()
    this.setState({ useful: true }, () => {
      this.props.createTag(this.state)
    })
  }

  handleFunny(e) {
    e.preventDefault()
    this.setState({ funny: true }, () => {
      this.props.createTag(this.state)
    })
  }

  handleCool(e) {
    e.preventDefault()
    this.setState({ cool: true }, () => {
      this.props.createTag(this.state)
    })
  }

  render() {
    let { coolSum, usefulSum, funnySum } = this.props
    return (
      <div>
        <form>
          <button onClick={this.handleUseful}>{`Useful ${usefulSum}`}</button>
          <button onClick={this.handleFunny}>{`Funny ${funnySum}`}</button>
          <button onClick={this.handleCool}>{`Cool ${coolSum}`}</button>
        </form>
      </div>
    )
  }
}

export default ReviewTag
