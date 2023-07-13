import { KeyBoardLetter } from "../components/App";
import { isPerfectMatch } from "./isPerfectMatch";

export function getColorUpdateKeyboardLetters(
    keyboardLetters: KeyBoardLetter[],
    oneAttempt: string,
    solutionWord: string
): KeyBoardLetter[] {
    const colorUpdateKeyboardLetters: KeyBoardLetter[] = keyboardLetters.map(
        (oneKeyboardLetter) =>
            getColorUpdateLetter(oneKeyboardLetter, oneAttempt, solutionWord)
    );
    return colorUpdateKeyboardLetters;
}

function getColorUpdateLetter(
    oneKeyboardLetter: KeyBoardLetter,
    oneAttempt: string,
    solutionWord: string
) {
    if (oneAttempt.includes(oneKeyboardLetter.value)) {
        const colorUpdateKeyboardLetter = { ...oneKeyboardLetter };
        if (
            isPerfectMatch(oneKeyboardLetter.value, solutionWord, oneAttempt) ||
            oneKeyboardLetter.color === "green"
        ) {
            colorUpdateKeyboardLetter.color = "green";
        } else if (solutionWord.includes(oneKeyboardLetter.value)) {
            colorUpdateKeyboardLetter.color = "yellow";
        } else {
            colorUpdateKeyboardLetter.color = "gray";
        }
        return colorUpdateKeyboardLetter;
    } else {
        return oneKeyboardLetter;
    }
}
