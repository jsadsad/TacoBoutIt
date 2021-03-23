import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLightbulb,
  faSmileBeam,
  faCookie,
} from '@fortawesome/free-solid-svg-icons'

class UpdateTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.tag.id,
      review_id: this.props.tag.review_id,
      useful: this.props.tag.useful,
      funny: this.props.tag.funny,
      cool: this.props.tag.cool,
    }
    this.handleUseful = this.handleUseful.bind(this)
    this.handleFunny = this.handleFunny.bind(this)
    this.handleCool = this.handleCool.bind(this)
  }

  componentDidMount() {
    let useful = document.getElementById(`useful${this.props.tag.id}`)
    let funny = document.getElementById(`funny${this.props.tag.id}`)
    let cool = document.getElementById(`cool${this.props.tag.id}`)

    let usefulState = this.props.tag.useful
    let funnyState = this.props.tag.funny
    let coolState = this.props.tag.cool

    if (usefulState) useful.classList.add('tag-toggle')
    if (funnyState) funny.classList.add('tag-toggle')
    if (coolState) cool.classList.add('tag-toggle')
  }

  handleUseful(e) {
    e.preventDefault()
    let useful = document.getElementById(`useful${this.props.tag.id}`)
    if (useful) useful.classList.toggle('tag-toggle')
    if (this.state.useful) {
      this.setState(
        {
          useful: false,
          update: true,
        },
        () => {
          this.props.updateTag(this.state)
        }
      )
    } else {
      this.setState(
        {
          useful: true,
        },
        () => {
          this.props.updateTag(this.state)
        }
      )
    }
  }

  handleFunny(e) {
    e.preventDefault()
    let funny = document.getElementById(`funny${this.props.tag.id}`)
    if (funny) funny.classList.toggle('tag-toggle')

    if (this.state.funny) {
      this.setState(
        {
          funny: false,
        },
        () => {
          this.props.updateTag(this.state)
        }
      )
    } else {
      this.setState(
        {
          funny: true,
        },
        () => {
          this.props.updateTag(this.state)
        }
      )
    }
  }

  handleCool(e) {
    e.preventDefault()
    let cool = document.getElementById(`cool${this.props.tag.id}`)
    if (cool) cool.classList.toggle('tag-toggle')

    if (this.state.cool) {
      this.setState(
        {
          cool: false,
        },
        () => {
          this.props.updateTag(this.state)
        }
      )
    } else {
      this.setState(
        {
          cool: true,
        },
        () => {
          this.props.updateTag(this.state)
        }
      )
    }
  }

  render() {
    let { usefulSum, funnySum, coolSum } = this.props

    return (
      <div>
        <form>
          <button
            onClick={this.handleUseful}
            className="tag-buttons"
            id={`useful${this.props.tag.id}`}
          >
            <FontAwesomeIcon
              className="button-fa"
              icon={faLightbulb}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Useful ${usefulSum}`}
          </button>
          <button
            onClick={this.handleFunny}
            className="tag-buttons"
            id={`funny${this.props.tag.id}`}
          >
            <FontAwesomeIcon
              className="button-fa"
              icon={faSmileBeam}
              color="black"
              size="sm"
              fixedWidth
            />
            {`Funny ${funnySum}`}
          </button>
          <button
            onClick={this.handleCool}
            className="tag-buttons"
            id={`cool${this.props.tag.id}`}
          >
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

export default UpdateTag
