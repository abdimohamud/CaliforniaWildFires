import React from 'react'
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import '../Login.scss'

const Login = () => {
    const history = useHistory();

    const { register, handleSubmit } = useForm({
        mode: "onBlur"
      });
    
      const onSubmit = (data) => {
        // if error happens on submit button replace the parameters of axios.post with `${API_URL}/ez_auth`, {username:USER, api_key:API_KEY} and try again with that dataset below

        axiosWithAuth()
        .post('/ez_auth', data)
        .then((res)=> {
            window.localStorage.setItem("token", res.data.token)
            history.push('/dashboard')
        })
        .catch(err=>console.log(err))
      
      };
      return (
        <div className="App">
          <div className="Login">
           <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="username">Please enter your username</label>
              <input
                name="username"
                id="username"
                placeholder="username"
                ref={register({ minLength: 1 })}
              />
              <label htmlFor="api_key">Please enter your APIKEY</label>
              <input
                name="api_key"
                id="api_key"
                placeholder="api_key"
                ref={register({ minLength: 1 })}
              />
              <input type="submit" id="submit"/>
              </div>
            </form>
          </div>
        </div>
      );
    
}
export default Login;