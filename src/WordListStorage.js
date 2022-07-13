import firebase from './firebase';
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { useEffect, useState, useRef } from 'react';
import { useNavigate} from "react-router-dom";
import Output from './Output';
import Search from './Search';

function WordListStorage (props) {
    const navigate = useNavigate();
    const firstRender = useRef(true)
    const [wordList, setWordList] = useState([]);

    useEffect(()=> {
      // create a variable that holds our database details
      const database = getDatabase(firebase);

      // we then create a variable that makes reference to our database
      const dbRef = ref(database, props.wordListID.route + "/words");

       // add an event listener to that variable that will fire
    // from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
       // here we use Firebase's .val() method to parse our database info the way we want it
      console.log(response.val());
      setWordList(response.val() || []);
    })
  }, [props.wordListID.route])

  useEffect(()=>{
    if (firstRender.current === true) {
      firstRender.current = false;
    }
    else {
      const database = getDatabase(firebase);
      const dbRef = ref(database, props.wordListID.route + "/words");
      set(dbRef, wordList);
    }
  },[wordList,props.wordListID.route])

  const addWordToList = (newWord) => {
    // console.log(newWord)
    // console.log(wordList)
    setWordList([...wordList,newWord])
    // push(dbRef, newWord);
    // console.log('working???')
  }

  const removeWordFromList = (index) => {
    const newArray = wordList.slice();
    newArray.splice(index,1)
    setWordList(newArray)
    // const newArray = [];
    // wordList.forEach((el, otherIndex)=>{
    //   if (index !== otherIndex) {
    //     newArray.push(el)
    //   }
    // })
    // setWordList(newArray)
  }

  const removeListButton = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, props.wordListID.route)
    remove(dbRef)
    navigate(`../WordListPage`);
  }

    return (
      <div>
        {/* Put this back later */}
        {/* the search will need to know the props.wordListID so that
            when we write the firebase uploading/updating, it knows 
            which ID to write to */}
        <Search
          wordListID={props.wordListID.route}
          addFunction={addWordToList}
        />
        <h2>Your list for {props.wordListID.name}</h2>
        <button className='delete-btn' onClick={removeListButton}>Delete Word list</button>
        <div className='second-div'>

        <Output resultsArray={wordList} removeFunction={removeWordFromList} />
        </div>
      </div>
    );
}

export default WordListStorage;