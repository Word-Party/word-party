import OutputWord from './OutputWord';

function Output(props) {
    return (
        <ul>
            {props.resultsArray.map((word) => {
                return (
                    <OutputWord
                        key={word.score}
                        wordz={word}
                    />
                )
            })}
        </ul>
    )
}

export default Output;
