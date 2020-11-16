import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import '../sass/Map.scss'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
    center:{ lat: 37.422,
        lng: -122.084,}
  }
const zoomLevel =17


const Map = () => {
    return (
            <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAaREDtn6kD4qFmd0whkkXWI9XYTw4gSqs' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({map, maps}) =>
         new maps.Circle({
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#FF0000',
           fillOpacity: 0.3,
           map,
           center: location.center,
           radius: 275,
         })}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />

      </GoogleMapReact>
    </div>
  </div>
    )
}

export default Map
