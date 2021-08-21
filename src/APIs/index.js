const APIs = {
  mapbox: {
    url: "https://api.mapbox.com",
    style: "mapbox://styles/meladrift/cksbnu6c263mr17qpcy36duuk",
    token: process.env.REACT_APP_MAPBOX_KEY,
    revGeoCode: (lon, lat) => `/geocoding/v5/mapbox.places/${lon},${lat}.json`,
  },
};

export default APIs;
    