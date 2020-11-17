import React from "react";
import '../../sass/Dashboard.scss'



const Dashboard = ({ setFilter }) => {
  const onChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="Dashboard">
      <form>
        <div>
          <h1>California WildFire Incidents </h1>
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
        </div>
      </form>
    </div>
  );
};
export default Dashboard;
