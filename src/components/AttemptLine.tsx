interface AttemptLineProps {
    oneAttempt: string;
	oneAttemptIndex: number;
	attemptNb: number;
	solutionWord: string;
}

export function AttemptLine({ oneAttempt, oneAttemptIndex, attemptNb, solutionWord}: AttemptLineProps): JSX.Element {
    const isFilled = (letter: string) => letter === undefined ? false : true;
	const addBorderToSquare = (letter: string) => (isFilled(letter) ? " attempt-letter-sqr-filled ": undefined);
	const addColorToSquare = (remainingLetters: string[], letter: string, letterIndex: number) => {
		if (attemptNb > oneAttemptIndex) {
			if (solutionWord[letterIndex] === letter) {
				remainingLetters.splice(remainingLetters.findIndex((oneLetter) => oneLetter === letter), 1);
				return "green-btn"
			}
			else if (remainingLetters.includes(letter)) {
				remainingLetters.splice(remainingLetters.findIndex((oneLetter) => oneLetter === letter), 1);
				return "yellow-btn";
			}
		}
		return "gray-btn";
	}

	const attemptLineSquares = [];
	let remainingLetters: string[] = solutionWord.split("");

	for (let nbSquares = 0; nbSquares < 5; nbSquares++) {
		const oneLetter = oneAttempt[nbSquares];
		const square = <div className={"attempt-letter-sqr " + addBorderToSquare(oneLetter) + addColorToSquare(remainingLetters, oneLetter, nbSquares)}>{oneLetter}</div>
		attemptLineSquares.push(square)
	}	
		
	return (
        <>
            <div className="attempt-line">
				{attemptLineSquares}
            </div>
        </>
    );
}
