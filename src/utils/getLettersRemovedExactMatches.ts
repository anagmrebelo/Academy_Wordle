export function getLettersRemovedExactMatches(
    solutionWord: string,
    attempt: string
): string[] {
    const lettersRemovedExactMatches = solutionWord.split("");

    removeExactMatches(lettersRemovedExactMatches, attempt, solutionWord);

    return lettersRemovedExactMatches;
}

function removeExactMatches(
    lettersRemovedExactMatches: string[],
    attempt: string,
    solutionWord: string
) {
    attempt.split("").forEach((oneLetter, i) => {
        if (solutionWord[i] === oneLetter) {
            const indexToRemove: number = lettersRemovedExactMatches.findIndex(
                (letter) => letter === oneLetter
            );
            lettersRemovedExactMatches.splice(indexToRemove, 1);
        }
    });
}
