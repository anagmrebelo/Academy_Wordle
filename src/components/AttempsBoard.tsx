import { AttemptLine } from "./AttemptLine";

interface AttemptsBoardProps {
    attempts: string[];
    attemptNb: number;
    solutionWord: string;
}

export function AttemptsBoard({
    attempts,
    attemptNb,
    solutionWord,
}: AttemptsBoardProps): JSX.Element {
    const attemptsLines = attempts.map((oneAttempt, i) => (
        <AttemptLine
            key={i}
            oneAttempt={oneAttempt}
            oneAttemptIndex={i}
            attemptNb={attemptNb}
            solutionWord={solutionWord}
        />
    ));
    return <>{attemptsLines}</>;
}
