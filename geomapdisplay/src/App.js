import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.scss';

// // User Info (hardcoded for now)
// const API_URL = 'https://development.eazyml.com/ez_api'
// const USER = 'Abdi Mohamud'
// const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZmM1MjVkYi1hODdmLTQ5ZWItOWMxMC1lMzI4OGQ3N2YwZGQiLCJleHAiOjE2MDUzNzEzNjMsImZyZXNoIjpmYWxzZSwiaWF0IjoxNjA1Mjg0OTYzLCJ0eXBlIjoiYWNjZXNzIiwibmJmIjoxNjA1Mjg0OTYzLCJpZGVudGl0eSI6IkFiZGkgTW9oYW11ZCJ9.E0erIUrr5lrvM5-ulaT6zwxQ_sDDv8SjYBM4n6Ue9jQ'
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmOWQzZTI4Zi1kZTljLTRhNDktYmNiNS0wYWIxNTEwMmJkNGQiLCJleHAiOjE2MDU0MjEwODcsImZyZXNoIjpmYWxzZSwiaWF0IjoxNjA1MzM0Njg3LCJ0eXBlIjoiYWNjZXNzIiwibmJmIjoxNjA1MzM0Njg3LCJpZGVudGl0eSI6IkFiZGkgTW9oYW11ZCJ9.1qPLywu3_H79pzL5R7cwSSYauQdJhipTenUtdaLGKWM"
// //`${API_URL}/ez_fetch`, {headers:headers}, {data:options} 
// //`${API_URL}/ez_auth`, {username:USER, api_key:API_KEY}
// const headers = {
//   "Content-Type":"application/json",
//   "Authorization":`Bearer ${token}`
// }
// const options = {return_columns: "no",return_dataset: "yes"}

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
