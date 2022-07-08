import OutputWord from './OutputWord';

function Output(props) {
    return (
        <ul>
            {props.resultsArray.map((word) => {
                return (
                    <OutputWord
                        key={word.score}
                        word={word}
                    />
                )
            })}
        </ul>
    )
}

export default Output;
