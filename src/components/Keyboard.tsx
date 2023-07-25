import { KeyBoardLetter } from "./App";
import { getColorUpdateKeyboardLetters } from "../utils/getColorUpdateKeyboardLetters";
import { alertAutoDisappear } from "../utils/alertWin";

const maxAttemptsAllowed = 5;

interface KeyboardProps {
    keyboardLetters: KeyBoardLetter[];
    setKeyboardLetters: React.Dispatch<React.SetStateAction<KeyBoardLetter[]>>;
    attempts: string[];
    setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
    solutionWord: string;
    setGameNb: React.Dispatch<React.SetStateAction<number>>;
    attemptNb: number;
    setAttemptNb: React.Dispatch<React.SetStateAction<number>>;
    initialKeyboard: KeyBoardLetter[];
}

export function Keyboard({
    keyboardLetters,
    setKeyboardLetters,
    attempts,
    setAttempts,
    solutionWord,
    setGameNb,
    attemptNb,
    setAttemptNb,
    initialKeyboard,
}: KeyboardProps): JSX.Element {
    const handleOnClickLetter = (clickedLetter: KeyBoardLetter): void => {
        if (attempts[attemptNb].length < 5) {
            const addedLetterAttempts = [...attempts];
            addedLetterAttempts[attemptNb] += clickedLetter.value;
            setAttempts(addedLetterAttempts);
        }
    };

    const resetGame = () => {
        setAttempts(["", "", "", "", ""]);
        setGameNb((previous) => previous + 1);
        setAttemptNb(0);
        setKeyboardLetters(initialKeyboard);
    };

    const changeColorsKeyboard = () => {
        const colorUpdateKeyboardLetters: KeyBoardLetter[] =
            getColorUpdateKeyboardLetters(
                keyboardLetters,
                attempts[attemptNb],
                solutionWord
            );
        setKeyboardLetters(colorUpdateKeyboardLetters);
    };

    const handleOnClickEnter = (): void => {
        if (attempts[attemptNb].length === 5) {
            changeColorsKeyboard();
            setAttemptNb((previous) => previous + 1);
            if (attempts[attemptNb] === solutionWord) {
                alertAutoDisappear("You won!", 1000);
                resetGame();
            } else if (attemptNb + 1 === maxAttemptsAllowed) {
                alertAutoDisappear(
                    "You lost!",
                    2000,
                    "The word was " + solutionWord
                );
                resetGame();
            } else {
                alertAutoDisappear("Keep trying", 1000);
            }
        }
    };

    const handleOnClickDelete = (): void => {
        if (attempts[attemptNb].length > 0) {
            const deletedLastLetter = [...attempts];
            deletedLastLetter[attemptNb] = deletedLastLetter[attemptNb].slice(
                0,
                deletedLastLetter[attemptNb].length - 1
            );
            setAttempts(deletedLastLetter);
        }
    };

    const keyboardButtons = keyboardLetters.map((oneKeyboardLetter) => (
        <button
            onClick={() => handleOnClickLetter(oneKeyboardLetter)}
            className={
                "keyboard-letter-sqr " + oneKeyboardLetter.color + "-btn"
            }
            key={oneKeyboardLetter.value}
            id={oneKeyboardLetter.value}
        >
            {oneKeyboardLetter.value}
        </button>
    ));

    return (
        <>
            <div>{keyboardButtons}</div>
            <div className="special-btns">
                <button onClick={handleOnClickEnter}>Enter</button>
                <button onClick={handleOnClickDelete}>Delete</button>
            </div>
        </>
    );
}
