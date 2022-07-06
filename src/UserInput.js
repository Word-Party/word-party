// import Buttons from "./Buttons";
import { useState } from 'react';

function UserInput(props) {


    const [input, setInput] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        console.log(event.target.value);

        const myObject = {max: 10};
        myObject[event.target.name] = input;
        props.setParameter(myObject)

        setInput('');
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }


    return (
        <form>
            <label htmlFor="words" />
            <input 
                id="words" 
                type="text" 
                placeholder="Enter Text"
                value={input}
                onChange={handleInputChange}
            />
            <button 
                onClick={handleClick}
                name='rel_rhy'
            >
                Rhyme
            </button>
            <button 
                onClick={handleClick}
                name='ml'
            >
                Similar
            </button>
        </form>
    )
}

export default UserInput;