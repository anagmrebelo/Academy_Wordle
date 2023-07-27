import { isPerfectMatch } from "./isPerfectMatch";

export const changeColorsKeyboard = (
    oneAttempt: string,
    solutionWord: string,
    keyboardColors: { gray: string; yellow: string; green: string },
    setKeyboardColors: React.Dispatch<
        React.SetStateAction<{
            gray: string;
            yellow: string;
            green: string;
        }>
    >
): void => {
    oneAttempt.split("").forEach((oneLetter) => {
        const color = calculateColorOfLetter(
            oneLetter,
            oneAttempt,
            solutionWord,
            keyboardColors
        );
        setKeyboardColors((previous) => {
            const updatedKeyboardColors = { ...previous };
            updatedKeyboardColors[color] = `${previous[color]} ${oneLetter}`;
            if (color === "green") {
                updatedKeyboardColors.yellow = previous.yellow.replace(
                    oneLetter,
                    ""
                );
            }
            return updatedKeyboardColors;
        });
    });
};

function calculateColorOfLetter(
    oneLetter: string,
    oneAttempt: string,
    solutionWord: string,
    keyboardColors: { gray: string; yellow: string; green: string }
): "gray" | "green" | "yellow" {
    if (
        isPerfectMatch(oneLetter, solutionWord, oneAttempt) ||
        keyboardColors.green.includes(oneLetter)
    ) {
        return "green";
    } else if (solutionWord.includes(oneLetter)) {
        return "yellow";
    } else {
        return "gray";
    }
}
