import OutputWord from './OutputWord';
import "./App.css";

function Output(props) {
    return (
        <div>
            <ul className='output-container'>
                {props.resultsArray.map((word) => {
                    return (
                        <OutputWord
                            key={word.score}
                            word={word}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Output;
