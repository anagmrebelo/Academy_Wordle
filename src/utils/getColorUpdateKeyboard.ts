import { isPerfectMatch } from "./isPerfectMatch";

export function getColorUpdateKeyboard(
    oneAttempt: string,
    solutionWord: string,
    keyboardColors: {
        gray: string;
        yellow: string;
        green: string;
    },
    setKeyboardColors: React.Dispatch<
        React.SetStateAction<{
            gray: string;
            yellow: string;
            green: string;
        }>
    >
): void {
    oneAttempt
        .split("")
        .forEach((oneLetter) =>
            colorUpdateLetter(
                oneLetter,
                oneAttempt,
                solutionWord,
                keyboardColors,
                setKeyboardColors
            )
        );
}

function colorUpdateLetter(
    oneLetter: string,
    oneAttempt: string,
    solutionWord: string,
    keyboardColors: {
        gray: string;
        yellow: string;
        green: string;
    },
    setKeyboardColors: React.Dispatch<
        React.SetStateAction<{
            gray: string;
            yellow: string;
            green: string;
        }>
    >
) {
    if (oneAttempt.includes(oneLetter)) {
        if (
            isPerfectMatch(oneLetter, solutionWord, oneAttempt) ||
            keyboardColors.green.includes(oneLetter)
        ) {
            // const oneLetterRegex = new RegExp(oneLetter, "g");
            // if (!keyboardColors.green.includes(oneLetter)) {
            setKeyboardColors((previous) => ({
                ...keyboardColors,
                green: `${previous.green} ${oneLetter}`,
            }));
        } else if (solutionWord.includes(oneLetter)) {
            setKeyboardColors((previous) => ({
                ...keyboardColors,
                yellow: `${previous.yellow} ${oneLetter}`,
            }));
        } else {
            setKeyboardColors((previous) => ({
                ...keyboardColors,
                gray: `${previous.gray} ${oneLetter}`,
            }));
        }
    }
}
