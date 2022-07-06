import Output from "./Output";
import UserInput from "./UserInput";



function Search (props){
    return ( <div>
        <UserInput/>
        <Output wordArray={props.wordArray}/>
    </div> )
}


export default Search; 