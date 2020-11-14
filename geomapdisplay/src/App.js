import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import Data from './components/Data'
import './App.scss';

// User Info (hardcoded for now)
const API_URL = 'https://development.eazyml.com/ez_api'
const USER = 'Abdi Mohamud'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZmM1MjVkYi1hODdmLTQ5ZWItOWMxMC1lMzI4OGQ3N2YwZGQiLCJleHAiOjE2MDUzNzEzNjMsImZyZXNoIjpmYWxzZSwiaWF0IjoxNjA1Mjg0OTYzLCJ0eXBlIjoiYWNjZXNzIiwibmJmIjoxNjA1Mjg0OTYzLCJpZGVudGl0eSI6IkFiZGkgTW9oYW11ZCJ9.E0erIUrr5lrvM5-ulaT6zwxQ_sDDv8SjYBM4n6Ue9jQ'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmOWQzZTI4Zi1kZTljLTRhNDktYmNiNS0wYWIxNTEwMmJkNGQiLCJleHAiOjE2MDU0MjEwODcsImZyZXNoIjpmYWxzZSwiaWF0IjoxNjA1MzM0Njg3LCJ0eXBlIjoiYWNjZXNzIiwibmJmIjoxNjA1MzM0Njg3LCJpZGVudGl0eSI6IkFiZGkgTW9oYW11ZCJ9.1qPLywu3_H79pzL5R7cwSSYauQdJhipTenUtdaLGKWM"
//`${API_URL}/ez_fetch`, {headers:headers}, {data:options} 
//`${API_URL}/ez_auth`, {username:USER, api_key:API_KEY}
const headers = {
  "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`
}
const options = {return_columns: "no",return_dataset: "yes"}

function App() {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    // if error happens on submit button replace the parameters of axios.post with `${API_URL}/ez_auth`, {username:USER, api_key:API_KEY} and try again with that dataset below
    axios.post(`${API_URL}/ez_fetch`, {dataset_id:'17670',options:options}, {headers:headers} )
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  
  };
  return (
    <div className="App">
      <div className="Login">
       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Please enter year</label>
          <input
            name="username"
            id="username"
            placeholder="username"
            ref={register({ minLength: 1 })}
          />
          <input type="submit" id="submit"/>
          </div>
        </form>
      </div>
      {data && data.map(item => (
        <Data data={item} />
      ))}
      

    </div>
  );
}

export default App;
