import React from "react";
// import '../../sass/Dashboard.scss'



const Dashboard = ({ setFilter, filter }) => {
  const onChange = (e) => {
      const {name, value} = e.target
      setFilter(value)
    // setFilter({...filter, [name]:value});
  };
  return (
    <div className="Dashboard">
      <form>
        <div>
          <h1>California WildFire Incidents </h1>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <span >
          <label>(From 2013-2020)</label>
          <label htmlFor="order"></label>
          &nbsp;
          <select name="order" onChange={onChange}>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        </span>

        <span>
            <label>Filter By:</label>
          <select name="order" onChange={onChange}>&#8595;
              <option value="azUP">A-Z &#8593;</option>
              <option value="azDown">A-Z &#8595;</option>
              <option value="start_time">Start Time</option>
              <option value="extinguish_time">Extinguish Time</option>
          </select> 
        </span>
          </div>
          
          {/* &nbsp;
          */}
        </div>
      </form>
    </div>
  );
};
export default Dashboard;
