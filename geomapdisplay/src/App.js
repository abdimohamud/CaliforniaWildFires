import React, {useState} from 'react'
import { Switch, Route } from "react-router-dom"


import Dashboard from './components/Pages/Dashboard'
import FireList from './components/Fire/FireList'
import FireInfo from './components/Fire/FireInfo'


import data from './caliFiresIncident'
import './sass/App.scss';




function App() {
  const [filter, setFilter] =useState(2013)
  const dataset = data
 
  

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard setFilter={setFilter}/>
          <FireList dataset={dataset} filter={filter} />
        </Route>
        <Route path = "/:UniqueId">
          <FireInfo fires={dataset} />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
