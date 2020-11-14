import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import Data from './components/Data'
import './App.scss';

function App() {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <div className="Login">
       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="year">Please enter a year</label>
          <input
            name="year"
            id="year"
            placeholder="year"
            ref={register({ minLength: 3 })}
          />
          <input type="submit" id="submit"/>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
