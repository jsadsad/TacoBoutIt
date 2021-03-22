import React from 'react'

class UpdateTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    let usefulBol = this.props.tag.useful
    let funnyBol = this.props.tag.funny
    let coolBol = this.props.tag.cool
    let useful = document.getElementById(`useful${this.props.tag.id}`)
    let funny = document.getElementById(`funny${this.props.tag.id}`)
    let cool = document.getElementById(`cool${this.props.tag.id}`)

    if (usefulBol) useful.classList.add('reacted')
    if (funnyBol) funny.classList.add('reacted')
    if (coolBol) cool.classList.add('reacted')
  }

  handleUseful(e) {
    e.preventDefault()
    let useful = document.getElementById(`useful${this.props.tag.id}`)
    if (useful) useful.classList.toggle('reacted')
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
    if (funny) funny.classList.toggle('reacted')

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

    if (cool) cool.classList.toggle('reacted')

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
        <form className="reaction-form">
          <button
            className="reaction-buttons"
            id={`useful${this.props.tag.id}`}
            onClick={this.handleUseful}
          >
            {`Useful ${usefulSum}`}
          </button>
          <button
            className="reaction-buttons"
            id={`funny${this.props.tag.id}`}
            onClick={this.handleFunny}
          >
            {`Funny ${funnySum}`}
          </button>
          <button
            className="reaction-buttons"
            id={`cool${this.props.tag.id}`}
            onClick={this.handleCool}
          >
            {`Cool ${coolSum}`}
          </button>
        </form>
      </div>
    )
  }
}

export default UpdateTag
