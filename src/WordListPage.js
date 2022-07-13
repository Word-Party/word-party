import { Link } from "react-router-dom";
function WordListPage(props) {
  return (
    <>
      <h2>Word Playlists</h2>
      <ul className="main-route-playlist-container">
        <li className="main-route-playlist-items add">
          <Link to="/AddNewList">Create Your Own Wordlist</Link>
        </li>
        {props.wordListIDArray.map((wordListID) => {
          return (
            <li className="main-route-playlist-items">
              <Link to={"../" + wordListID.route}>{wordListID.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WordListPage;
