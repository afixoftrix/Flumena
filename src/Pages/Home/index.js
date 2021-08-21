import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { floor } from "lodash";
import APIs from "../../APIs";
import * as Styles from "./styles";

mapboxgl.accessToken = APIs.mapbox.token;

const Home = () => {
  const { url, token, style, revGeoCode } = APIs.mapbox;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [placeName, setPlaceName] = useState("");
  const [coords, setCoords] = useState("0.00,0.00");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      setCoords(`${floor(lng, 3)},${floor(lat, 3)}`);

      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: style,
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 14,
      });

      axios
        .get(`${url}${revGeoCode(lng, lat)}?types=region&access_token=${token}`)
        .then((res) => {
          console.log(res);
          setPlaceName(res.data.features[0].place_name);
        });
    });
  });

  return (
    <Styles.Page>
      <div>
        <div>Your Location:</div>
        <Styles.LocationName>{placeName}</Styles.LocationName>
      </div>
      <Styles.LocationCoords>{coords}</Styles.LocationCoords>
      <Styles.MapContainer ref={mapContainer} className="map-container" />
    </Styles.Page>
  );
};

export default Home;
