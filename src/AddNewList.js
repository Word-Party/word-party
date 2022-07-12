import { useState, } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import firebase from './firebase';
import { getDatabase, ref, set } from "firebase/database";

function AddNewList(props) {
    
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const word = searchParams.get('word')
    console.log(JSON.parse(word));

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        console.log(event.target.value);


        const database = getDatabase(firebase);
        let route = input.replace(' ','')
        for (let wordListID in props.wordListIDArray) {
            console.log(wordListID);
            if (props.wordListIDArray[wordListID].route === route) {
                route = route + '1'
                console.log(route);
            }
        }
        const dbRef = ref(database, route);
        set(dbRef, 
            { name: input,
                words: JSON.parse(word)
            }
        );
        navigate(`../${route}`)
    }
    
    return (
        <form action="submit">
            <label htmlFor="listName" className="sr-only">List Name</label>
            <input 
                type="text" 
                id="listName"
                placeholder="Enter List Name"
                value={input}
                onChange={handleInputChange}
            />
            <button 
                onClick={handleClick}

            >
                Create List
            </button>
        </form>
    )
}

export default AddNewList;