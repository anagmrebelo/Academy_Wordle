import { KeyBoardLetter } from "./App";

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
    const handleOnClickLetter = (event: any): void => {
        if (attempts[attemptNb].length < 5) {
            const addedLetterAttempts = [...attempts];
            addedLetterAttempts[attemptNb] += event.target.id;
            setAttempts(addedLetterAttempts);
        }
    };

    const resetGame = () => {
        setAttempts(["", "", "", "", ""]);
        setGameNb((previous) => previous + 1);
        setAttemptNb(0);
        setKeyboardLetters(initialKeyboard);
    };

    const findIndexesOfLetter = (letter: string, word: string) => {
        const indexesOfLetter: number[] = [];
        for (let index = 0; index < word.length; index++) {
            if (word[index] === letter) {
                indexesOfLetter.push(index);
            }
        }
        return indexesOfLetter;
    };

    const isPerfectMatch = (
        oneKeyboardLetterValue: string,
        solutionWord: string,
        oneAttempt: string
    ): boolean => {
        const solutionIndexes = findIndexesOfLetter(
            oneKeyboardLetterValue,
            solutionWord
        );
        const attemptIndexes = findIndexesOfLetter(
            oneKeyboardLetterValue,
            oneAttempt
        );

        for (const attemptIndex of attemptIndexes) {
            if (solutionIndexes.includes(attemptIndex)) {
                return true;
            }
        }
        return false;
    };

    const changeColorsKeyboard = () => {
        const colorUpdateKeyboardLetters: KeyBoardLetter[] =
            keyboardLetters.map((oneKeyboardLetter) => {
                if (attempts[attemptNb].includes(oneKeyboardLetter.value)) {
                    const colorUpdateKeyboardLetter = { ...oneKeyboardLetter };
                    if (
                        isPerfectMatch(
                            oneKeyboardLetter.value,
                            solutionWord,
                            attempts[attemptNb]
                        )
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
            });
        setKeyboardLetters(colorUpdateKeyboardLetters);
    };

    const handleOnClickEnter = (): void => {
        if (attempts[attemptNb].length === 5) {
            changeColorsKeyboard();
            setAttemptNb((previous) => previous + 1);
            if (attempts[attemptNb] === solutionWord) {
                alert("You won!");
                resetGame();
            } else if (attemptNb + 1 === maxAttemptsAllowed) {
                alert("You Lost! The word was " + { solutionWord });
                resetGame();
            } else {
                alert("Keep trying");
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
            onClick={handleOnClickLetter}
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
            {keyboardButtons}
            <button onClick={handleOnClickEnter}>Enter</button>
            <button onClick={handleOnClickDelete}>Delete</button>
        </>
    );
}
