import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../caliFiresIncident";
// import "../../sass/FireInfo.scss";

import back from "../../assets/back.svg";

import Map from "../Map/Map";

const FireInfo = () => {
  const { UniqueId } = useParams();
  const fire = data.find((thing) => `${thing.UniqueId}` === UniqueId);
  return (
      <div className="jumbotron">
          <span>

            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={back}
                className="iconChat"
                alt="Icon chat"
                style={{ height: "100px", width: "77.39px" }}
              />
            </Link>
  <h1 className="display-4">{fire.Name} ({fire.Counties} County)</h1>
          </span>
  {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
  <hr className="my-4"/>
  <div style={{display:'flex', justifyContent:'space-evenly'}}>
  <span style={{display:'flex', flexDirection:'column', justifyContent:'inherit'}}>
                <p>Acres Burned : {fire.AcresBurned} </p>
  <p>Response Unit : {fire.AdminUnit}</p>
  <p>
    Latitude : {fire.Latitude} Longitude : {fire.Longitude}
  </p>
  <p>Start Time : {fire.Started}</p>
  <p>Extinguished : {fire.Extinguished}</p>
  <p>Location : {fire.Location}</p>
   </span>
                <span><Map
                  AcresBurned={fire.AcresBurned}
                  Latitude={fire.Latitude}
                  Longitude={fire.Longitude}
                  Location={fire.Location}
                />
      
  <a className="btn btn-primary btn-lg" href={`https://www.fire.ca.gov${fire.CanonicalUrl}`} role="button">Learn more</a>
</span>
</div>
</div>
  
    
  );
};
export default FireInfo;
// AcresBurned : {fire.AcresBurned} Latitude={fire.Latitude} Longitude={fire.Longitude} Location={fire.Location}
