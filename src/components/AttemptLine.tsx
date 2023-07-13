import { getLettersRemovedExactMatches } from "../utils/getLettersRemovedExactMatches";
import { addBorderToSquare, addColorToSquare } from "../utils/addCSSToSquares";

interface AttemptLineProps {
    oneAttempt: string;
    oneAttemptIndex: number;
    attemptNb: number;
    solutionWord: string;
}

export function AttemptLine({
    oneAttempt,
    oneAttemptIndex,
    attemptNb,
    solutionWord,
}: AttemptLineProps): JSX.Element {
    const attemptLineSquares = [];
    const lettersRemovedExactMatches: string[] = getLettersRemovedExactMatches(
        solutionWord,
        oneAttempt
    );

    for (let nbSquares = 0; nbSquares < 5; nbSquares++) {
        const oneLetter = oneAttempt[nbSquares];
        const square = (
            <div
                className={
                    "attempt-letter-sqr " +
                    addBorderToSquare(oneLetter) +
                    addColorToSquare(
                        lettersRemovedExactMatches,
                        oneLetter,
                        nbSquares, attemptNb, solutionWord, oneAttemptIndex
                    )
                }
            >
                {oneLetter}
            </div>
        );
        attemptLineSquares.push(square);
    }

    return (
        <>
            <div className="attempt-line">{attemptLineSquares}</div>
        </>
    );
}
