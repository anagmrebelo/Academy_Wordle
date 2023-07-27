import { getRandomItem } from "../utils/getRandomItem";

interface HeaderProps {
    gameNb: number;
    setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
    setGameNb: React.Dispatch<React.SetStateAction<number>>;
    setAttemptNb: React.Dispatch<React.SetStateAction<number>>;
    setKeyboardColors: React.Dispatch<
        React.SetStateAction<{
            gray: string;
            yellow: string;
            green: string;
        }>
    >;
    setSolutionWord: React.Dispatch<React.SetStateAction<string>>;
    allPossibleWords: string[];
}

export function Header({
    gameNb,
    setAttempts,
    setGameNb,
    setAttemptNb,
    setKeyboardColors,
    setSolutionWord,
    allPossibleWords,
}: HeaderProps): JSX.Element {
    const resetGame = () => {
        setAttempts(["", "", "", "", ""]);
        setGameNb((previous) => previous + 1);
        setAttemptNb(0);
        setKeyboardColors({ gray: "", yellow: "", green: "" });
        setSolutionWord(getRandomItem(allPossibleWords));
    };

    return (
        <>
            <h1 className="padding-20">Wordle</h1>
            <div className="grid-flex">
                <h2 className="padding-20">Game #{gameNb}</h2>
                <button className={"reset-btn"} onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </>
    );
}
