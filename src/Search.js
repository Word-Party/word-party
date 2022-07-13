import axios from 'axios';
// import firebase from './firebase';
// import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState   } from 'react';
import Output from "./Output";
import UserInput from "./UserInput";
import { useNavigate } from "react-router-dom";

function Search (props){
    const navigate = useNavigate();
    const [parameterObject, setParameter] = useState({
        rel_rhy: '',
        /* similar: 'ml', */
        max: 20,
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
        })
      },[parameterObject])

      let myAddFunction;
      if (props.addFunction) {
        myAddFunction = props.addFunction
      }
      else {
        myAddFunction = (word)=>{
          navigate(`../AddNewList?word=${JSON.stringify([word])}`)
        }
      }

    return ( <div>
        <UserInput
            parameterObject={parameterObject}
            setParameter={setParameter}
        />
        <h2>Your Results</h2>
        <Output 
            resultsArray={output}
            addFunction={myAddFunction}
        />
    </div> )
}


export default Search; 