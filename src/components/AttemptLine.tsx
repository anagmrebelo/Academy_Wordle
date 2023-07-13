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
    const possibleYellowLetters: string[] = getLettersRemovedExactMatches(
        solutionWord,
        oneAttempt
    );

    const attemptLineSquares = [];
    for (let nbSquares = 0; nbSquares < 5; nbSquares++) {
        const oneLetter = oneAttempt[nbSquares];
        const square = (
            <div
                className={
                    "attempt-letter-sqr " +
                    addBorderToSquare(oneLetter) +
                    addColorToSquare(
                        oneLetter,
                        nbSquares,
                        attemptNb,
                        solutionWord,
                        oneAttemptIndex,
                        possibleYellowLetters
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
