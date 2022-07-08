import axios from 'axios';
import { useEffect, useState } from 'react';
/* import firebase from 'firebase'; */
import './App.scss';
import Search from './Search';
/* import { Link, Routes, Route, } from 'react-router-dom'; */



function App() {

  const [parameterObject, setParameter] = useState({
    rel_rhy: '',
    /* similar: 'ml', */
    max: 10,
  })

  const [output, setOutput] = useState([]) 

  useEffect(() => {
    console.log('pulling from API');
    axios({
      url: 'https://api.datamuse.com/words',
      method: 'GET',
      params: parameterObject,
    }).then((res) => {
      setOutput(res.data);
      // console.log(res.data);
    })
  },[parameterObject])

  //For testing only 
  // useEffect(() => {
  //     console.log(output);
  //     console.log(parameterObject);
  // },[output, parameterObject])

  return (
    <div className="App">
      <Search 
        resultsArray={output}
        parameterObject={parameterObject}
        setParameter={setParameter}
      />
    </div>
  );
}

export default App;
