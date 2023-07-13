import { isUndefined } from "./isUndefined";
import { getLetterScore } from "./getLetterScore";

export const addBorderToSquare = (letter: string) =>
    isUndefined(letter) ? " attempt-letter-sqr-filled " : undefined;

export const addColorToSquare = (
    letter: string,
    letterIndex: number,
    attemptNb: number,
    solutionWord: string,
    oneAttemptIndex: number,
    possibleYellowLetters: string[]
): string => {
    if (attemptNb > oneAttemptIndex) {
        const oneLetterScore = getLetterScore(
            solutionWord,
            letter,
            letterIndex,
            possibleYellowLetters
        );
        let cssClassName = "font-white border-none ";
        switch (oneLetterScore) {
            case 2:
                cssClassName += "green-btn";
                break;
            case 1:
                cssClassName += "yellow-btn";
                break;
            case 0:
                cssClassName += "lightgray-btn";
                break;
        }
        return cssClassName;
    }
    return "";
};
