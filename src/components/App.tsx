import "./App.css";
import { useEffect, useState } from "react";
import { AttemptsBoard } from "./AttempsBoard";
import { Header } from "./Header";
import KeyboardSimple from "./KeyboardSimple";

export interface KeyBoardLetter {
    id: number;
    value: string;
    color: string;
}

type WordFetched = string[];

function App() {
    const [solutionWord, setSolutionWord] = useState<string>("");
    const [gameNb, setGameNb] = useState(1);
    const [attempts, setAttempts] = useState<string[]>(["", "", "", "", ""]);
    const [attemptNb, setAttemptNb] = useState(0);
    const [allPossibleWords, setAllPossibleWords] = useState<string[]>([]);
    const [keyboardColors, setKeyboardColors] = useState({
        gray: "",
        yellow: "",
        green: "",
    });

    useEffect(() => {
        async function fetchWord() {
            const response = await fetch(
                "https://random-word-api.herokuapp.com/all"
            );
            const bodyData: WordFetched = await response.json();
            let allWords = bodyData.map((oneWord) => oneWord.toUpperCase());
            allWords = allWords.filter((oneWord) => oneWord.length === 5);
            setAllPossibleWords(allWords);
        }
        fetchWord();
    }, []);

    useEffect(() => {
        if (allPossibleWords.length > 0) {
            setSolutionWord(
                allPossibleWords[
                    Math.floor(Math.random() * allPossibleWords.length)
                ]
            );
        }
    }, [gameNb, allPossibleWords]);
    return (
        <>
            <div className="wordle-card">
                <Header
                    gameNb={gameNb}
                    setAttempts={setAttempts}
                    setGameNb={setGameNb}
                    setAttemptNb={setAttemptNb}
                    setKeyboardColors={setKeyboardColors}
                />
                <div>{solutionWord}</div>
                <div className={"attempts-board"}>
                    <AttemptsBoard
                        attempts={attempts}
                        attemptNb={attemptNb}
                        solutionWord={solutionWord}
                    />
                </div>
                <div className="keyboard">
                    <KeyboardSimple
                        attempts={attempts}
                        setAttempts={setAttempts}
                        attemptNb={attemptNb}
                        setAttemptNb={setAttemptNb}
                        allPossibleWords={allPossibleWords}
                        solutionWord={solutionWord}
                        keyboardColors={keyboardColors}
                        setKeyboardColors={setKeyboardColors}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
