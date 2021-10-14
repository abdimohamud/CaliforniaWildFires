import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import '../../sass/Map.scss'


const zoomLevel =17


const Map = ({acresBurned, latitude, longitude, location}) => {
  const deflocation = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
    center:{ lat: 37.422,
        lng: -122.084,}
  }
  const spot = {
    address: location,
    lat: latitude,
    lng: longitude,
    center:{ lat: latitude,
        lng: longitude}
  }
  console.log(acresBurned, latitude, longitude, location)
  const radiusMath = Math.sqrt(acresBurned*43560/3.14159)
    return (
            <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAaREDtn6kD4qFmd0whkkXWI9XYTw4gSqs' }}
        defaultCenter={spot}
        defaultZoom={zoomLevel}
        onGoogleApiLoaded={({map, maps}) =>
         new maps.Circle({
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#FF0000',
           fillOpacity: 0.3,
           map,
           
           center: spot.center,
          //  radius:radiusMath ,
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
