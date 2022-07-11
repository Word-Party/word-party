import axios from 'axios';
import { useEffect, useState } from 'react';
import Output from "./Output";
import UserInput from "./UserInput";
function Search (props){
    
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

    return ( <div>
        <UserInput
            // parameterObject={props.parameterObject}
            // setParameter={props.setParameter}
            parameterObject={parameterObject}
            setParameter={setParameter}
        />
        <Output 
            // resultsArray={props.resultsArray}
            resultsArray={output}
            addFunction={props.addFunction}
        />
    </div> )
}


export default Search; 