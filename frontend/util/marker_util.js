class MarkerManager {
  constructor(map) {
    this.map = map
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
        map: map,
        position: { lat: business.lat, lng: business.lng },
        title: business.name,
      })
    } else {
      const marker = new google.maps.Marker({
        map: map,
        title: business.name,
        position: { lat: business.lat, lng: business.lng },
      })
    }
  }
}

export default MarkerManager
