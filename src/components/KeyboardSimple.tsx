import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface KeyboardProps {
    attempts: string[];
    setAttempts: React.Dispatch<React.SetStateAction<string[]>>;
    attemptNb: number;
}

export default function KeyboardSimple({
    attempts,
    attemptNb,
    setAttempts,
}: KeyboardProps): JSX.Element {
    const letterPress = (button: string) => {
        if (attempts[attemptNb].length < 5) {
            const addedLetterAttempts = [...attempts];
            addedLetterAttempts[attemptNb] += button;
            setAttempts(addedLetterAttempts);
        }
    };

    const enterPress = () => {};

    const bkspPress = () => {};

    const onKeyPress = (button: string) => {
        console.log(button);
        switch (button) {
            case "{enter}":
                enterPress();
                break;
            case "{bksp}":
                bkspPress();
                break;
            default:
                letterPress(button);
        }
    };

    return (
        <Keyboard
            onKeyPress={onKeyPress}
            layout={{
                default: [
                    "Q W E R T Y U I O P",
                    "A S D F G H J K L",
                    "{enter} Z X C V B N M {bksp}",
                ],
            }}
        />
    );
}
