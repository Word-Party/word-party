import Buttons from "./Buttons";

function UserInput(props) {
    return (
        <form>
            <label htmlFor="words" />
            <input 
            id="words" 
            type="text" 
            placeholder="Enter Text"
            />
        </form>
    )
}

export default UserInput;