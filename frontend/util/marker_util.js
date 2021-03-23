export default class MarkerManager {
  constructor(map) {
    this.map = map
    this.markers = {}
    this.createMarkerFromBusiness = this.createMarkerFromBusiness.bind(this)
  }

  updateMarkers(businesses) {
    const map = this.map

    if (Array.isArray(businesses)) {
      for (let i = 0; i < businesses.length; i++) {
        this.createMarkerFromBusiness(businesses[i], map, i)
      }
    } else {
      this.createMarkerFromBusiness(businesses, map, null)
    }
  }

  createMarkerFromBusiness(business, map, num) {
    if (num === null) {
      const marker = new google.maps.Marker({
        position: { lat: business.lat, lng: business.lng },
        map: map,
        title: business.name,
      })
    } else {
      const marker = new google.maps.Marker({
        position: { lat: business.lat, lng: business.lng },
        label: (num + 1).toString(),
        map: map,
        title: business.name,
      })
    }
  }
}
