import Output from "./Output";
import UserInput from "./UserInput";

function Search (props){
    
    return ( <div>
        <UserInput
            parameterObject={props.parameterObject}
            setParameter={props.setParameter}
        />
        <Output resultsArray={props.resultsArray}/>
    </div> )
}


export default Search; 