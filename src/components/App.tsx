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
                "https://random-word-api.herokuapp.com/all"
            );
            const bodyData: WordFetched = await response.json();
            let allWords = bodyData.map((oneWord) => oneWord.toUpperCase());
            allWords = allWords.filter((oneWord) => oneWord.length === 5);
            setSolutionWord(
                allWords[Math.floor(Math.random() * allWords.length)]
            );
        }
        fetchWord();
    }, []);
    return (
        <>
            <div className="wordle-card">
                <Header gameNb={gameNb} />
                <div>{solutionWord}</div>
                <div className={"attempts-board"}>
                    <AttemptsBoard
                        attempts={attempts}
                        attemptNb={attemptNb}
                        solutionWord={solutionWord}
                    />
                </div>
                <div className="keyboard">
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
            </div>
        </>
    );
}

export default App;
