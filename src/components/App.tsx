import "./App.css";
import { useEffect, useState } from "react";
import { AttemptsBoard } from "./AttempsBoard";
import { Keyboard } from "./Keyboard";
import { Header } from "./Header";

export interface KeyBoardLetter {
    id: number;
    value: string;
    color: string;
}

type WordFetched = string[];

function App() {
    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    const initialKeyboard: KeyBoardLetter[] = alphabet.map((oneLetter, i) => ({
        id: i,
        value: oneLetter.toUpperCase(),
        color: "lightgray",
    }));
    const [solutionWord, setSolutionWord] = useState<string>("");
    const [gameNb, setGameNb] = useState(1);
	const [keyboardLetters, setKeyboardLetters] = useState(initialKeyboard);
	const [attempts, setAttempts] = useState<string[]>(["", "", "", "", ""]);
    const [attemptNb, setAttemptNb] = useState(0);

    useEffect(() => {
        async function fetchWord() {
            const response = await fetch(
                "https://random-word-api.herokuapp.com/word?length=5"
            );
            const bodyData: WordFetched = await response.json();
            const upperCasedSolutionWord = bodyData[0].toUpperCase();
            setSolutionWord(upperCasedSolutionWord);
        }
        fetchWord();
    }, [gameNb]);
    return (
        <>
		<div className="wordle-card">
			<Header gameNb={gameNb} />
			<div>{solutionWord}</div>
			<AttemptsBoard attempts={attempts} attemptNb={attemptNb} solutionWord={solutionWord} />
            <Keyboard
                    keyboardLetters={keyboardLetters}
                    setKeyboardLetters={setKeyboardLetters}
                    attempts={attempts}
                    setAttempts={setAttempts}
                    solutionWord={solutionWord}
                    setGameNb={setGameNb}
					attemptNb={attemptNb}
					setAttemptNb={setAttemptNb}
					initialKeyboard={initialKeyboard}
                />
			</div>
        </>
    );
}

export default App;
