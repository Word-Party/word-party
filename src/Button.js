import {useState} from 'react';

function Button(props) {
    

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        console.log(event.target.value);

        const myObject = {max: 10};
        myObject[event.target.name] = props.input;
        props.setParameter(myObject)

        // props.setInput('');
    }

    
    return(
        <>
            <button 
                onClick={handleClick}
                name={props.parameter}
            >
                {props.buttonName}
            </button>
            {/* <button 
                onClick={handleClick}
                name='ml'
            >
                Similar
            </button> */}
        </>
    )
}


export default Button;