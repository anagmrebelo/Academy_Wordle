import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { alertAutoDisappear } from "../utils/alertWin";
import { changeColorsKeyboard } from "../utils/changeColorsKeyboard";
import { maxAttemptsAllowed } from "./App";

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
            alertAutoDisappear(
                "You lost!",
                2000,
                "The word was " + solutionWord
            );
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
        console.log(button);
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
            layout={{
                default: [
                    "Q W E R T Y U I O P",
                    "A S D F G H J K L",
                    "{bksp} Z X C V B N M {enter}",
                ],
            }}
            buttonTheme={buttonTheme}
            theme={"hg-theme-default"}
        />
    );
}
