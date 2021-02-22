import React from 'react'
import map from '../map.png'

const Map = () => {
    return (
        <React.Fragment>
        <div className="info">
        <h1>Map</h1>
       </div>
       <div className="map">
        <img src={map} alt="map_img" />
       </div>
        </React.Fragment>
    )
}

export default Map
