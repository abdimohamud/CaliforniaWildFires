import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Fire.scss";
const Fire = ({ fire }) => {
  return (
    <div className="fire">
      <Link to={`/${fire.UniqueId}`}>
        <h2>{fire.Name}</h2>
      </Link>
      <h4> County : {fire.Counties}</h4>
      <h4>Response Unit : {fire.AdminUnit}</h4>
      <h4>
        Location : <br />
        {fire.Location}
      </h4>
      <h4>Start Time : {fire.Started}</h4>
      <h4>Extinguished : {fire.Extinguished}</h4>
    </div>
  );
};

export default Fire;
