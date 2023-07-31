import { KeyboardLayouts } from "./App";

interface KeyboardSelectorProps {
    setKeyboardLayoutType: React.Dispatch<
        React.SetStateAction<KeyboardLayouts>
    >;
}

export function KeyboardSelector({
    setKeyboardLayoutType,
}: KeyboardSelectorProps): JSX.Element {
    return (
        <select
            defaultValue={"QWERTY"}
            onChange={(e) =>
                setKeyboardLayoutType(e.target.value as KeyboardLayouts)
            }
        >
            <option value={"QWERTY"}>QWERTY</option>
            <option value={"AZ"}>A-Z</option>
        </select>
    );
}
