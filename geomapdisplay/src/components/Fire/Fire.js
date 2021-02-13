import React from "react";
import { Link } from "react-router-dom";
const moment = require('moment')
// import "../../sass/Fire.scss";
const Fire = ({ fire }) => {
    function timeConvert (time) {
        let res = moment(time).format('MMMM Do YYYY, h:mm:ss a');
        return res
    }
  return (


<div className="card" style={{minWidth: "23rem", marginBottom:'10px'}}>

  
   <Link to={`/${fire.UniqueId}`}><h5 className="card-title">{fire.Name}</h5></Link> 
    {/* <p className="card-text"> </p> */}

  <ul className="list-group list-group-flush">
      <li className="list-group-item">Response Unit : <br/>{fire.AdminUnit}</li>
    <li className="list-group-item">Location :<br/> {fire.Location}</li>
    <li className="list-group-item"> County : {fire.Counties}</li>
    <li className="list-group-item">Start Time : {timeConvert(fire.Started)}</li>
    <li className="list-group-item">Extinguished : {timeConvert(fire.Extinguished)}</li>
  </ul>
  {/* <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> */}
</div>
  );
};

export default Fire;
