import React from 'react'

class BusinessMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let mapLoc = this.mapOptions()
    this.map = new google.maps.Map(this.mapNode, mapLoc)
  }

  mapOptions() {
    const { business } = this.props

    if (!business) return null
    if (this.props.business) {
      return {
        center: {
          lat: parseFloat(business.lat),
          lng: parseFloat(business.lng),
        },
        zoom: 15,
        fullScreen: false,
        clickableIcons: false,
        disableDefaultUI: true,
        draggable: false,
        streetViewControl: false,
        mapTypeControl: false,
        gestureHandling: 'none',
        fullscreenControl: false,
      }
    } else {
      return {
        center: { lat: 37.773972, lng: -122.431297 },
        zoom: 13,
      }
    }
  }

  render() {
    if (!this.props.business) return <h1>Loading...</h1>
    return (
      <div style={{ height: '100%' }} ref={(map) => (this.mapNode = map)}></div>
    )
  }
}
export default BusinessMap
