// import { isPerfectMatch } from "./isPerfectMatch";

// export function getColorUpdateKeyboard(
//     oneAttempt: string,
//     solutionWord: string,
//     keyboardColors: {
//         gray: string;
//         yellow: string;
//         green: string;
//     },
//     setKeyboardColors: React.Dispatch<
//         React.SetStateAction<{
//             gray: string;
//             yellow: string;
//             green: string;
//         }>
//     >
// ): void {
//     oneAttempt
//         .split("")
//         .forEach((oneLetter) =>
//             colorUpdateLetter(
//                 oneLetter,
//                 oneAttempt,
//                 solutionWord,
//                 keyboardColors
//             )
//         );
// }

// export function calculateColorOfLetter(
//     oneLetter: string,
//     oneAttempt: string,
//     solutionWord: string,
//     keyboardColors: {
//         gray: string;
//         yellow: string;
//         green: string;
//     }
// ): string {
//     if (
//         isPerfectMatch(oneLetter, solutionWord, oneAttempt) ||
//         keyboardColors.green.includes(oneLetter)
//     ) {
//         return "green";
//     } else if (solutionWord.includes(oneLetter)) {
//         return "yellow";
//     } else {
//         return "gray";
//     }
// }
