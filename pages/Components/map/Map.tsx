import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '40%',
    height: '63rem',
};

const center = {
  lat: 50.05,
  lng: 19.95
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBBIR7E5zs69zAu12_JAWJJIQj4jefvf0A"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)