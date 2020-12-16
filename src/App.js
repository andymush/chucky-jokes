
import axios from 'axios';
import './App.css';
import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button'
import { ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [state,setState] =useState({
    joke:''
  })

  useEffect( () => {
    fetchData();
  },[]);

const fetchData =async()=> {
  const result = axios.get('https://api.chucknorris.io/jokes/random');
  console.log((await result).data.value);
  setState({
    ...state,
    joke: (await result).data.value
  })
}

function refreshPage() {
  window.location.reload(false);
}    


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="title">Chuck Norris Joke</h1>
          <br></br>
        </div>
      </div>
          <ButtonToolbar>
            <button className="btn btn-primary" onClick={refreshPage}>Get a random Joke</button>
          </ButtonToolbar>
        <br>
        </br>
      <h4>{state.joke}</h4>
      
      </div>
  );
}


export default App;
