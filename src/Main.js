import { Link } from "react-router-dom"
function Main (props) {
    return <>
        <h2>Word Playlist</h2>
        <button>
        <Link to='/Search'>Ready to search a word?
        </Link>
        </button>

        <div>

        <ul className="main-route-playlist-container">
            {/* This is going to need a map function to make all
                the links for the different keys */}
            {/* {console.log(props.wordListIDArray)} */}
            {props.wordListIDArray.map((wordListID)=>{
                return <li className="main-route-playlist-items"><a href={wordListID}>{wordListID}</a></li>
            })}
            {/* <li><a href="/route1">wordlist 1</a></li> */}
            {/* <li><a href="/route2">wordlist 2</a></li> */}
        </ul>
        </div>
    </>
}

export default Main
