import { isUndefined } from "./isUndefined";

export const addBorderToSquare = (letter: string) =>
    isUndefined(letter) ? " attempt-letter-sqr-filled " : undefined;

export const addColorToSquare = (
    lettersRemovedExactMatches: string[],
    letter: string,
    letterIndex: number,
	attemptNb: number,
	solutionWord: string,
	oneAttemptIndex: number
) => {
    if (attemptNb > oneAttemptIndex) {
        if (solutionWord[letterIndex] === letter) {
            lettersRemovedExactMatches.splice(
                lettersRemovedExactMatches.findIndex(
                    (oneLetter) => oneLetter === letter
                ),
                1
            );
            return "green-btn font-white";
        } else if (lettersRemovedExactMatches.includes(letter)) {
            lettersRemovedExactMatches.splice(
                lettersRemovedExactMatches.findIndex(
                    (oneLetter) => oneLetter === letter
                ),
                1
            );
            return "yellow-btn font-white";
        } else {
            return "lightgray-btn font-white";
        }
    }
    return undefined;
};
