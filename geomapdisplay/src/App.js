import React, {useState} from 'react'
import { Switch, Route } from "react-router-dom"


import Dashboard from './components/Pages/Dashboard'
import FireList from './components/Fire/FireList'
import FireInfo from './components/Fire/FireInfo'
import SideBar from './components/Pages/Sidebar'

import data from './caliFiresIncident'
import './sass/App.scss';
import './index.css'



function App() {
  const [filter, setFilter] =useState(2013)
  const dataset = data
 
  

  return (
    <div className="App" id="App">
     
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">

      <Switch>
        <Route exact path="/">
          <Dashboard setFilter={setFilter} filter={filter}/>
          <FireList dataset={dataset} filter={filter} />
        </Route>
        <Route path = "/:UniqueId">
          <FireInfo fires={dataset} />
        </Route>
      </Switch>  
      </div>
    </div>
  );
}

export default App;
