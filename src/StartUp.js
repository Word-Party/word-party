import { Link} from "react-router-dom";
function StartUp() {
    return (
        <div>
            <h2>Where would you like to go?</h2>
        <div className="start-up-buttons">
            <button>
            <Link to="/Search">Search</Link>
            </button>
            <button>
            <Link to="/WordListPage">WordList</Link>
            </button>
        </div>
        </div>
    );
}

export default StartUp;
