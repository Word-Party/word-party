import axios from 'axios';
import firebase from './firebase';
import { getDatabase, ref, set } from "firebase/database";
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
          // console.log(res.data);
        })
      },[parameterObject])

      let myAddFunction;
      if (props.addFunction) {
        myAddFunction = props.addFunction
      }
      else {
        myAddFunction = (word)=>{
          const newRoute = prompt('enter new routename')
          console.log(newRoute)
          const database = getDatabase(firebase);
          const dbRef = ref(database, newRoute);
          set(dbRef, 
            { name: newRoute,
              words: [word]
            }
          );
          navigate(`../${newRoute}`)
        }
      }

    return ( <div>
        <UserInput
            // parameterObject={props.parameterObject}
            // setParameter={props.setParameter}
            parameterObject={parameterObject}
            setParameter={setParameter}
        />
        <h2>your results:</h2>
        <Output 
            // resultsArray={props.resultsArray}
            resultsArray={output}
            addFunction={myAddFunction}
        />
    </div> )
}


export default Search; 