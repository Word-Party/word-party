import "./App.css";

function OutputWord(props) {
  return <li 
  className="output-item" onClick={ () => {
    props.addFunction(props.word)
    // console.log(props)
  }
  }>
    {props.word.word}
    </li>;
}

export default OutputWord;
