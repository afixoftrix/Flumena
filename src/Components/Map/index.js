import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div` 
  height: 400px;
`;

const Map = ({ mapRef }) => {
  return (
    <div>
      <MapContainer ref={mapRef} className="map-container" />
    </div>
  )
}

export default Map;
