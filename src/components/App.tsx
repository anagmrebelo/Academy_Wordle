import "./App.css";
import { useEffect, useState } from "react";
import { AttemptsBoard } from "./AttempsBoard";
import { Header } from "./Header";
import KeyboardSimple from "./KeyboardSimple";
import { getRandomItem } from "../utils/getRandomItem";
import { collect } from "../utils/collect";

export interface KeyBoardLetter {
    id: number;
    value: string;
    color: string;
}

type WordFetched = string[];

export const maxAttemptsAllowed = 6;

export const keyboardLayouts = {
    QWERTY: {
        default: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L",
            "{bksp} Z X C V B N M {enter}",
        ],
    },
    AZ: {
        default: [
            "A B C D E F G H I J",
            "K L M N O P Q R S",
            "{bksp} T U V X W Y Z {enter}",
        ],
    },
};

export type KeyboardLayouts = "QWERTY" | "AZ";

function App() {
    const [solutionWord, setSolutionWord] = useState<string>("");
    const [gameNb, setGameNb] = useState(1);
    const [attempts, setAttempts] = useState<string[]>(
        collect("", maxAttemptsAllowed)
    );
    const [attemptNb, setAttemptNb] = useState(0);
    const [allPossibleWords, setAllPossibleWords] = useState<string[]>([]);
    const [keyboardColors, setKeyboardColors] = useState({
        gray: " ",
        yellow: " ",
        green: " ",
    });
    const [keyboardLayoutType, setKeyboardLayoutType] =
        useState<KeyboardLayouts>("QWERTY");

    useEffect(() => {
        async function fetchWord() {
            fetch("https://random-word-api.herokuapp.com/all")
                .then((response) => response.json())
                .then((bodyData: WordFetched) =>
                    bodyData.map((oneWord: string) => oneWord.toUpperCase())
                )
                .then((allWords) =>
                    allWords.filter((oneWord: string) => oneWord.length === 5)
                )
                .then((allWords) => {
                    setAllPossibleWords(allWords);
                    setSolutionWord(getRandomItem(allWords));
                });
        }
        fetchWord();
    }, []);

    return (
        <>
            <div className="wordle-card">
                <Header
                    gameNb={gameNb}
                    setAttempts={setAttempts}
                    setGameNb={setGameNb}
                    setAttemptNb={setAttemptNb}
                    setKeyboardColors={setKeyboardColors}
                    allPossibleWords={allPossibleWords}
                    setSolutionWord={setSolutionWord}
                    setKeyboardLayoutType={setKeyboardLayoutType}
                />
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
                        solutionWord={solutionWord}
                        keyboardColors={keyboardColors}
                        setKeyboardColors={setKeyboardColors}
                        allPossibleWords={allPossibleWords}
                        keyboardLayoutType={keyboardLayoutType}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
