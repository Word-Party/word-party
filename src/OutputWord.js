import "./App.css";

function OutputWord(props) {
  return <li 
  className="output-item" onClick={ () => {
    if (props.removeFunction) {
      props.removeFunction(props.index)
    }
    else {
      props.addFunction(props.word)
    }
    // console.log(props)
  }
  }>
    {props.word.word}
    </li>;
}

export default OutputWord;
