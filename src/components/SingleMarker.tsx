import React from "react";
import { Marker, Popup } from "react-map-gl";
import { Locaton } from "../AppTypes";

interface Props {
  data: Locaton;
}

function SingleMarker({ data }: Props) {
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePop = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Marker longitude={data.lon} latitude={data.lat} onClick={togglePop}>
        <i className="fa-sharp fa-solid fa-location-dot" />
      </Marker>
      {showPopup && (
        <Popup
          longitude={data.lon}
          latitude={data.lat}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          <div className="px-4 py-2">
            <h5>{data.name}</h5>
            <h6>Today: {data.today}</h6>
            <h6>Tomorrow: {data.tomorrow}</h6>
          </div>
        </Popup>
      )}
    </div>
  );
}

export default SingleMarker;
