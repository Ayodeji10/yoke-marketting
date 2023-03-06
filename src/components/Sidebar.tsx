import React, { ChangeEvent, useState, useEffect } from "react";
import { Locations } from "../utils/locations";
import { Locaton } from "../AppTypes";
import { useMap } from "react-map-gl";

function Sidebar() {
  const { myMap } = useMap();

  const [minimized, setMinimized] = useState(false);
  const [locations, setLocations] = useState(Locations);

  //   get window size
  const getSize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
      setMinimized(true);
    } else {
      setMinimized(false);
    }
  };

  useEffect(() => {
    getSize();
  }, []);

  //   handle search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setLocations(Locations);
    } else {
      setLocations(
        Locations.filter((location) =>
          location.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  //   handle map jump
  const handleClick = (location: Locaton) => {
    if (typeof myMap !== "undefined") {
      myMap.flyTo({ center: [location.lon, location.lat], zoom: 8 });
    }
  };

  return (
    <div className={`sidebar ${minimized && "minimized"}`}>
      <div className="d-flex justify-content-between mb-3">
        {!minimized && <h1 className="mb-0">Locations</h1>}
        <i
          className="fa-solid fa-bars"
          onClick={() => setMinimized(!minimized)}
        />
      </div>
      {!minimized && (
        <>
          <div className="searchbar mb-3 d-flex justify-content-between align-items-center">
            <i className="fa-solid fa-magnifying-glass" />
            <input
              type="text"
              placeholder="Search available cities"
              onChange={handleSearch}
            />
          </div>
          <h3 className="mb-3">Cities</h3>
          {locations.map((location, i) => {
            return (
              <h4 key={i} onClick={() => handleClick(location)}>
                {location.name}
              </h4>
            );
          })}
          {locations.length === 0 && <h4>-- No Available Cities --</h4>}
        </>
      )}
    </div>
  );
}

export default Sidebar;
