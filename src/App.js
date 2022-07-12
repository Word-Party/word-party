import firebase from './firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';
import './App.css';
import Search from './Search';
import Main from './Main';
import WordListStorage from './WordListStorage';
import WordListPage from './WordListPage';
import AddNewList from './AddNewList';
import About from './About';
import Footer from './Footer';
import { Link, Routes, Route, } from 'react-router-dom';
import StartUp from './StartUp';

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
    const wordLists = [];
    const data = response.val()
    for (let key in data) {
      let wordList = {route: key, name: data[key].name}
      wordLists.push(wordList)
    }
    console.log(wordLists);
    setWordListIDArray(wordLists);
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
    <div className="App wrapper">
      {/* nav somewhere here */}
      <nav>
        <ul className="nav-container">
          <li>
            <Link to="/Main">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/WordListPage">Word list</Link>
          </li>
        </ul>
      </nav>

      <h1>WORD PARTY!</h1>
      <Routes>
        <Route path="/About" element={<About />} />

        <Route
          path="/Main"
          element={
            // pass keys into main
            <Main wordListIDArray={wordListIDArray} />
          }
        />
        <Route
          path="/search"
          element={
            <Search
            // resultsArray={output}
            // parameterObject={parameterObject}
            // setParameter={setParameter}
            />
          }
        />
        <Route
          path="/AddNewList"
          element={<AddNewList wordListIDArray={wordListIDArray} />}
        />
        <Route
          path="/WordListPage"
          element={<WordListPage wordListIDArray={wordListIDArray} />}
        ></Route>
        <Route path="/" element={<StartUp />}></Route>
        {wordListIDArray.map((wordListID) => {
          return (
            <Route
              path={wordListID.route}
              key={wordListID.route}
              element={
                // something here for the output of the wordlist
                <WordListStorage wordListID={wordListID} />
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
