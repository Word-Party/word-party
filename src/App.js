import firebase from './firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import './App.scss';
import Search from './Search';
import Main from './Main';
import WordListStorage from './WordListStorage';
import { Link, Routes, Route, } from 'react-router-dom';

function App() {

  const [wordListIDArray, setWordListIDArray] = useState([]);

  useEffect(()=> {
    // create a variable that holds our database details
    const database = getDatabase(firebase);

    // we then create a variable that makes reference to our database
    const dbRef = ref(database);

     // add an event listener to that variable that will fire
  // from the database, and call that data 'response'.
  onValue(dbRef, (response) => {
    // here we use Firebase's .val() method to parse our database info the way we want it
    const wordListIDs = [];
    const data = response.val()
    for (let key in data) {
      wordListIDs.push(key)
    }
    console.log(wordListIDs);
    setWordListIDArray(wordListIDs);
  })
}, [])
  
  // const [parameterObject, setParameter] = useState({
  //   rel_rhy: '',
  //   /* similar: 'ml', */
  //   max: 10,
  // })

  // const [output, setOutput] = useState([]) 

  // useEffect(() => {
  //   console.log('pulling from API');
  //   axios({
  //     url: 'https://api.datamuse.com/words',
  //     method: 'GET',
  //     params: parameterObject,
  //   }).then((res) => {
  //     setOutput(res.data);
  //     // console.log(res.data);
  //   })
  // },[parameterObject])

  //For testing only 
  // useEffect(() => {
  //     console.log(output);
  //     console.log(parameterObject);
  // },[output, parameterObject])

  return (
    <div className="App">
      <h1>Word Party!</h1>
      {/* nav somewhere here */}
      <Routes>
        <Route path="/" element={ 
          // pass keys into main
          <Main wordListIDArray={wordListIDArray}/> 
        } />
        <Route path="/search" element={ 
          <Search 
            // resultsArray={output}
            // parameterObject={parameterObject}
            // setParameter={setParameter}
          />
        } />
          {/* Eventually, there will be a map function here that
              generates a route for each key in firebase */}
          {/* <Route path="/route1" element={ 
            // something here for the output of the wordlist
            <WordListStorage wordListID={"route1"} />
          } />
          <Route path="/route2" element={ 
            // something here for the output of the wordlist
            <WordListStorage wordListID={"route2"} />
          } /> */}
          {wordListIDArray.map((wordListID) => {
            return <Route path={wordListID} key={wordListID} element={ 
              // something here for the output of the wordlist
              <WordListStorage wordListID={wordListID} />
            } />
          })}
      </Routes>

    </div>
  );
}

export default App;
