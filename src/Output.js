import OutputWord from './OutputWord';
import "./App.css";

function Output(props) {
    return (
        <div>
            <ul className='output-container'>
                {props.resultsArray.map((word, index) => {
                    return (
                        <OutputWord
                            key={index}
                            word={word}
                            addFunction={props.addFunction}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Output;