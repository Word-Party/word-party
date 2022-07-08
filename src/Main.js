function Main (props) {
    return <>
        <h2>wtf do you want to do?</h2>
        <a href="/search">just search</a>
        <ul>
            {/* This is going to need a map function to make all
                the links for the different keys */}
            {/* {console.log(props.wordListIDArray)} */}
            {props.wordListIDArray.map((wordListID)=>{
                return <li><a href={wordListID}>{wordListID}</a></li>
            })}
            {/* <li><a href="/route1">wordlist 1</a></li> */}
            {/* <li><a href="/route2">wordlist 2</a></li> */}
        </ul>
    </>
}

export default Main
