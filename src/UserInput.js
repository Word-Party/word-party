// import Buttons from "./Buttons";
import { useState } from 'react';
import Button from './Button';


function UserInput(props) {


    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }


    return (
        <form>
            <h2>Search</h2>
            <label htmlFor="words" />
            <input 
                id="words" 
                type="text" 
                placeholder="Enter Word"
                value={input}
                onChange={handleInputChange}
            />
            <div className='button-container'>

            <Button 
                parameter={'rel_rhy'}
                setParameter={props.setParameter}
                setInput={setInput}
                input={input}
                buttonName={'rhyme'}
            />
            <Button 
                parameter={'ml'}
                setParameter={props.setParameter}
                setInput={setInput}
                input={input}
                buttonName={'similar'}
            />
            </div>
        </form>
    )
}

export default UserInput;