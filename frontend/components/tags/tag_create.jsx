import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLightbulb,
  faSmileBeam,
  faCookie,
} from '@fortawesome/free-solid-svg-icons'

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
          <button onClick={this.handleUseful}>
            {' '}
            <FontAwesomeIcon
              className="button-fa"
              icon={faLightbulb}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Useful ${usefulSum}`}
          </button>
          <button onClick={this.handleFunny}>
            {' '}
            <FontAwesomeIcon
              className="button-fa"
              icon={faSmileBeam}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Funny ${funnySum}`}
          </button>
          <button onClick={this.handleCool}>
            {' '}
            <FontAwesomeIcon
              className="button-fa"
              icon={faCookie}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Cool ${coolSum}`}
          </button>
        </form>
      </div>
    )
  }
}

export default ReviewTag
