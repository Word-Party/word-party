import firebase from './firebase';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useEffect, useState } from 'react';
import Output from './Output';
import Search from './Search';

function WordListStorage (props) {

    const [wordList, setWordList] = useState([]);

    useEffect(()=> {
      // create a variable that holds our database details
      const database = getDatabase(firebase);

      // we then create a variable that makes reference to our database
      const dbRef = ref(database, props.wordListID);

       // add an event listener to that variable that will fire
    // from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
       // here we use Firebase's .val() method to parse our database info the way we want it
      console.log(response.val());
      setWordList(response.val());
    })
  }, [props.wordListID])

  useEffect(()=>{
    if (wordList.length > 0) {
      const database = getDatabase(firebase);
      const dbRef = ref(database, props.wordListID);
      set(dbRef, wordList);
    }
  },[wordList,props.wordListID])

  const addWordToList = (newWord) => {
    // console.log(newWord)
    // console.log(wordList)
    setWordList([...wordList,newWord])
    // push(dbRef, newWord);
    // console.log('working???')
  }

    return (
      <div>
        {/* Put this back later */}
        {/* the search will need to know the props.wordListID so that
            when we write the firebase uploading/updating, it knows 
            which ID to write to */}
        <Search 
          wordListID={props.wordListID}
          addFunction={addWordToList}
        />
        
        <Output 
            resultsArray={wordList}
            // addFunction={removeWordFromList}
        />
      </div>
    );
}

export default WordListStorage;