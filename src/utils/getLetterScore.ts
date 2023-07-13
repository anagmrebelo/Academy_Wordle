export function getLetterScore(
    solutionWord: string,
    letter: string,
    letterIndex: number,
    possibleYellowLetters: string[]
): 0 | 1 | 2 {
    if (solutionWord[letterIndex] === letter) {
        return 2;
    } else if (possibleYellowLetters.includes(letter)) {
        possibleYellowLetters.splice(
            possibleYellowLetters.findIndex(
                (oneLetter) => oneLetter === letter
            ),
            1
        );
        return 1;
    }
    return 0;
}
