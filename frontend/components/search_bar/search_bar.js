import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      location: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    let target = ''
    switch (this.state.search) {
      case 'sushi':
        target = '/businesses/japanese'
        break
      case 'ramen':
        target = '/businesses/japanese'
        break
      case 'japanese':
        target = '/businesses/japanese'
        break
      case 'pasta':
        target = '/businesses/italian'
        break
      case 'spaghetti':
        target = '/businesses/italian'
        break
      case 'italian':
        target = '/businesses/italian'
        break
      case 'burgers':
        target = '/businesses/american'
        break
      case 'steak':
        target = '/businesses/american'
        break
      case 'american':
        target = '/businesses/american'
        break
      case 'pad thai':
        target = '/businesses/thai'
        break
      case 'khao soi':
        target = '/businesses/thai'
        break
      case 'thai':
        target = '/businesses/thai'
        break
      case 'hot pot':
        target = '/businesses/chinese'
        break
      case 'dim sum':
        target = '/businesses/chinese'
        break
      case 'chinese':
        target = '/businesses/chinese'
        break
      case 'bibimbap':
        target = '/businesses/korean'
        break
      case 'bulgogi':
        target = '/businesses/korean'
        break
      case 'korean':
        target = '/businesses/korean'
        break
      case 'boba':
        target = '/businesses/tea'
        break
      case 'coffee':
        target = '/businesses/tea'
        break
      case 'tea':
        target = '/businesses/tea'
        break
      default:
        target = `/businesses/search/find_desc=${this.state.search}&loc=${this.state.location}`
    }
    this.props.history.push(target)
  }

  findInput() {
    return (
      <div className="search-bar-input-container">
        <span className="search-bar-input-label">Find</span>
        <input
          className="search-bar-input"
          type="text"
          placeholder="boba, sushi, pad thai, hot pot..."
          onChange={this.handleField('search')}
          value={this.state.search}
        />
      </div>
    )
  }

  nearInput() {
    return (
      <div className="search-bar-input-container">
        <span className="search-bar-input-label">Near</span>
        <input
          className="search-bar-input"
          type="text"
          placeholder="address, city, state, or zip..."
          onChange={this.handleField('location')}
          value={this.state.location}
        />
      </div>
    )
  }

  searchButton() {
    return (
      <div className="search-bar-search-mag" onClick={this.handleSubmit}>
        <FontAwesomeIcon icon={faSearch} size="sm" color="white" />
      </div>
    )
  }

  render() {
    return (
      <div className="search-bar-container">
        {this.findInput()}
        {this.nearInput()}
        {this.searchButton()}
      </div>
    )
  }
}

export default withRouter(Search)
