import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../caliFiresIncident";
import "../../sass/FireInfo.scss";
import imagery from "../../assets/external.svg";
import back from "../../assets/back.svg";

import Map from "../Map/Map";

const FireInfo = () => {
  const { UniqueId } = useParams();
  const fire = data.find((thing) => `${thing.UniqueId}` === UniqueId);
  return (
    <div className="fireInfo">
      <div className="fireInfoTitle">
        <div className="heading">
          <div className="links">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={back}
                className="iconChat"
                alt="Icon chat"
                style={{ height: "100px", width: "77.39px" }}
              />
            </Link>
          </div>
          <h1>
            {fire.Name} ({fire.Counties} County)
          </h1>
          <h3>Acres Burned : {fire.AcresBurned} </h3>
          <a href={`https://www.fire.ca.gov${fire.CanonicalUrl}`}>
            <img
              src={imagery}
              className="iconChat"
              alt="Icon chat"
              style={{ height: "100px", width: "77.39px" }}
            />
          </a>
        </div>
        <Map
          AcresBurned={fire.AcresBurned}
          Latitude={fire.Latitude}
          Longitude={fire.Longitude}
          Location={fire.Location}
        />
      </div>
      <div className="firedetails">
        <h3>Response Unit : {fire.AdminUnit}</h3>
        <h3>
          Latitude : {fire.Latitude} Longitude : {fire.Longitude}
        </h3>
        <h3>Start Time : {fire.Started}</h3>
        <h3>Extinguished : {fire.Extinguished}</h3>
        <h3>Location : {fire.Location}</h3>
      </div>
    </div>
  );
};
export default FireInfo;
// AcresBurned : {fire.AcresBurned} Latitude={fire.Latitude} Longitude={fire.Longitude} Location={fire.Location}
