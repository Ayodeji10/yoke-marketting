import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Locations } from "../utils/locations";
import { MapProps } from "../AppTypes";
import SingleMarker from "./SingleMarker";
import Map, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";

function MapView() {
  const [viewPort, setViewPort] = useState<MapProps>({
    longitude: Locations[0].lon,
    latitude: Locations[0].lat,
    zoom: 6,
  });

  return (
    <Map
      id="myMap"
      mapboxAccessToken="pk.eyJ1IjoiYXlvZGVqaS0xMCIsImEiOiJjbGV0NHczMHgxM3c5M3pwMTRyeHRiNmJyIn0.hXwaTX68fJmksOh922NGig"
      initialViewState={viewPort}
      pitch={50}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {Locations.map((location, i) => {
        const { lat, lon } = location;
        return <SingleMarker data={location} key={i} />;
      })}
      <NavigationControl />
      <GeolocateControl />
      <FullscreenControl />
    </Map>
  );
}

export default MapView;
