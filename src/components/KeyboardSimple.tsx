import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { alertAutoDisappear, alertFixed } from "../utils/alerts";
import { changeColorsKeyboard } from "../utils/changeColorsKeyboard";
import { KeyboardLayouts, maxAttemptsAllowed, keyboardLayouts } from "./App";

interface KeyboardProps {
    attempts: string[];
    setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
    attemptNb: number;
    setAttemptNb: React.Dispatch<React.SetStateAction<number>>;
    allPossibleWords: string[];
    solutionWord: string;
    keyboardColors: { gray: string; yellow: string; green: string };
    setKeyboardColors: React.Dispatch<
        React.SetStateAction<{
            gray: string;
            yellow: string;
            green: string;
        }>
    >;
    keyboardLayoutType: KeyboardLayouts;
}

export default function KeyboardSimple({
    attempts,
    attemptNb,
    setAttemptNb,
    setAttempts,
    allPossibleWords,
    solutionWord,
    keyboardColors,
    setKeyboardColors,
    keyboardLayoutType,
}: KeyboardProps): JSX.Element {
    const letterPress = (button: string) => {
        if (attempts[attemptNb].length < 5) {
            const addedLetterAttempts = [...attempts];
            addedLetterAttempts[attemptNb] += button;
            setAttempts(addedLetterAttempts);
        }
    };

    const enterPress = () => {
        if (attempts[attemptNb].length !== 5) {
            alertAutoDisappear("Word has to be 5 letters", 1000);
            return;
        }
        if (!allPossibleWords.includes(attempts[attemptNb])) {
            alertAutoDisappear("Not a valid english word", 1000);
            return;
        }
        changeColorsKeyboard(
            attempts[attemptNb],
            solutionWord,
            keyboardColors,
            setKeyboardColors
        );
        setAttemptNb((previous) => previous + 1);
        if (attempts[attemptNb] === solutionWord) {
            alertAutoDisappear("You won!", 1000);
        } else if (attemptNb + 1 === maxAttemptsAllowed) {
            alertFixed("You lost!", "The word was " + solutionWord);
        }
    };

    const bkspPress = () => {
        if (attempts[attemptNb].length > 0) {
            const deletedLastLetter = [...attempts];
            deletedLastLetter[attemptNb] = deletedLastLetter[attemptNb].slice(
                0,
                deletedLastLetter[attemptNb].length - 1
            );
            setAttempts(deletedLastLetter);
        }
    };

    const onKeyPress = (button: string) => {
        switch (button) {
            case "{enter}":
                enterPress();
                break;
            case "{bksp}":
                bkspPress();
                break;
            default:
                letterPress(button);
        }
    };

    const buttonTheme = [
        {
            class: "hg-gray",
            buttons: keyboardColors.gray,
        },
        {
            class: "hg-green",
            buttons: keyboardColors.green,
        },
        {
            class: "hg-yellow",
            buttons: keyboardColors.yellow,
        },
    ];

    return (
        <Keyboard
            onKeyPress={onKeyPress}
            layout={keyboardLayouts[keyboardLayoutType]}
            buttonTheme={buttonTheme}
            theme={"hg-theme-default"}
        />
    );
}
