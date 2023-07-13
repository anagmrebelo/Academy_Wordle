export const isPerfectMatch = (
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

const findIndexesOfLetter = (letter: string, word: string) => {
    const indexesOfLetter: number[] = [];
    for (let index = 0; index < word.length; index++) {
        if (word[index] === letter) {
            indexesOfLetter.push(index);
        }
    }
    return indexesOfLetter;
};
