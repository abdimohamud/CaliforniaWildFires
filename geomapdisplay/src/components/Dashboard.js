import React, { useState, useEffect  } from "react";
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const token = window.localStorage.getItem('token')
const headers = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }
const options = {return_columns: "no",return_dataset: "yes"}

const Dashboard =() => {
    const[dataset, setDataset] = useState([])
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
      });
    const onSubmit = (data) => {
     
        axiosWithAuth()
        .post('/ez_fetch', {...data ,options:options}, {headers:headers})
        .then((res)=> {
           setDataset(res.data)
        })
        .catch(err=>console.log(err))
      
      };
    console.log(dataset)
    return (
        <div>
            Welcome to your Dashboard
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="dataset_id">Please enter your DataSet ID</label>
              <input
                name="dataset_id"
                id="dataset_id"
                placeholder="dataset_id"
                ref={register({ minLength: 1 })}
              />
              <input type="submit" id="submit"/>
            </div>
            </form>
        </div>
    )
}
export default Dashboard;