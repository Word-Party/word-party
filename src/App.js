import axios from 'axios';
import { useEffect, useState } from 'react';
/* import firebase from 'firebase'; */
import './App.scss';
import Search from './Search';
/* import { Link, Routes, Route, } from 'react-router-dom'; */



function App() {

  const [parameterObject, setParameter] = useState({
    rel_rhy: 'sea',
    /* similar: 'ml', */
    max: 10,
  })
  const [output, setOutput] = useState([]) 

  useEffect(() => {
    axios({
      url: 'https://api.datamuse.com/words',
      method: 'GET',
      params: parameterObject,
    }) .then((res) => {
      setOutput(res.data);
      console.log(res.data);
    })
  },[])

  useEffect(() => {
      console.log(output);
  },[output])

  return (
    <div className="App">
      <Search wordArray={output}/>
    </div>
  );
}

export default App;
