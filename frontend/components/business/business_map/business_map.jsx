import React from 'react'

class BusinessMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions)
  }

  render() {
    return (
      <div style={{ height: '100%' }} ref={(map) => (this.mapNode = map)}></div>
    )
  }
}
export default BusinessMap
