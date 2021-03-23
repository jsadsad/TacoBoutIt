import React from 'react'
import MarkerManager from '../../../util/marker_util'

class BusinessMap extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let mapLoc
    if (Array.isArray(this.props.businesses)) {
      mapLoc = {
        center: {
          lat: this.props.businesses[0].lat,
          lng: this.props.businesses[0].lng,
        },
        zoom: 10,
        fullScreen: false,
      }
    } else {
      mapLoc = {
        center: {
          lat: this.props.businesses.lat,
          lng: this.props.businesses.lng,
        },
        zoom: 10,
        fullScreen: false,
      }
    }

    this.map = new google.maps.Map(this.mapNode, mapLoc)

    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.businesses)
  }

  componentDidUpdate() {
    let mapLoc
    if (Array.isArray(this.props.businesses)) {
      mapLoc = {
        center: {
          lat: this.props.businesses[0].lat,
          lng: this.props.businesses[0].lng,
        },
        zoom: 12,
      }
    } else {
      mapLoc = {
        center: {
          lat: this.props.businesses.lat,
          lng: this.props.businesses.lng,
        },
        zoom: 12,
      }
    }

    this.map = new google.maps.Map(this.mapNode, mapLoc)

    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.businesses)
  }

  render() {
    if (!this.props.businesses) return <h1>Loading...</h1>
    return (
      <div style={{ height: '100%' }} ref={(map) => (this.mapNode = map)}></div>
    )
  }
}

export default BusinessMap
