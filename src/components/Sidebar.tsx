import React, { ChangeEvent, useState, useEffect } from "react";
import { Locations } from "../utils/locations";

function Sidebar() {
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
    console.log(e.target.value);
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
            return <h4 key={i}>{location.name}</h4>;
          })}
        </>
      )}
    </div>
  );
}

export default Sidebar;
