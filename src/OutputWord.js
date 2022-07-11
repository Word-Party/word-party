import "./App.css";

function OutputWord(props) {
  return <li 
  className="output-item" onClick={
    props.addFunction.current(props.word)
    /* console.log(props.addFunction) */
  }>
    {props.word.word}
    </li>;
}

export default OutputWord;
