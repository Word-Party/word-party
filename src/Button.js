
function Button(props) {
    

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        console.log(event.target.value);

        const myObject = {max: 20};
        myObject[event.target.name] = props.input;
        props.setParameter(myObject)
    }

    
    return(
        <>
            <button 
                onClick={handleClick}
                name={props.parameter}
            >
                {props.buttonName}
            </button>
        </>
    )
}


export default Button;