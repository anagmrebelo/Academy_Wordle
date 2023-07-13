import { getLetterScore } from "../utils/getLetterScore";
import { getLettersRemovedExactMatches } from "../utils/getLettersRemovedExactMatches";

test("Attempt: EEEEE solution: DERMA", () => {
    const possibleYellowLetters = getLettersRemovedExactMatches(
        "DERMA",
        "EEEE"
    );
    expect(getLetterScore("DERMA", "E", 0, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("DERMA", "E", 1, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("DERMA", "E", 2, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("DERMA", "E", 3, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("DERMA", "E", 4, possibleYellowLetters)).toEqual(0);
});

test("Attempt: EFEEE solution: DERMA", () => {
    const possibleYellowLetters = getLettersRemovedExactMatches(
        "DERMA",
        "EFEE"
    );
    expect(getLetterScore("DERMA", "E", 0, possibleYellowLetters)).toEqual(1);
    expect(getLetterScore("DERMA", "F", 1, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("DERMA", "E", 2, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("DERMA", "E", 3, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("DERMA", "E", 4, possibleYellowLetters)).toEqual(0);
});

test("Attempt: LULLS solution: LEVEL", () => {
    const possibleYellowLetters = getLettersRemovedExactMatches(
        "LEVEL",
        "LULLS"
    );
    expect(getLetterScore("LEVEL", "L", 0, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("LEVEL", "U", 1, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("LEVEL", "L", 2, possibleYellowLetters)).toEqual(1);
    expect(getLetterScore("LEVEL", "L", 3, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("LEVEL", "S", 4, possibleYellowLetters)).toEqual(0);
});

test("Attempt: STEEL solution: LEVEL", () => {
    const possibleYellowLetters = getLettersRemovedExactMatches(
        "LEVEL",
        "STEEL"
    );
    expect(getLetterScore("LEVEL", "S", 0, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("LEVEL", "T", 1, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("LEVEL", "E", 2, possibleYellowLetters)).toEqual(1);
    expect(getLetterScore("LEVEL", "E", 3, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("LEVEL", "L", 4, possibleYellowLetters)).toEqual(2);
});

test("Attempt: LEVEL solution: LEVEL", () => {
    const possibleYellowLetters = getLettersRemovedExactMatches(
        "LEVEL",
        "LEVEL"
    );
    expect(getLetterScore("LEVEL", "L", 0, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("LEVEL", "E", 1, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("LEVEL", "V", 2, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("LEVEL", "E", 3, possibleYellowLetters)).toEqual(2);
    expect(getLetterScore("LEVEL", "L", 4, possibleYellowLetters)).toEqual(2);
});

test("Attempt: LEVEL solution: PARTY", () => {
    const possibleYellowLetters = getLettersRemovedExactMatches(
        "PARTY",
        "APPLE"
    );
    expect(getLetterScore("PARTY", "A", 0, possibleYellowLetters)).toEqual(1);
    expect(getLetterScore("PARTY", "P", 1, possibleYellowLetters)).toEqual(1);
    expect(getLetterScore("PARTY", "P", 2, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("PARTY", "L", 3, possibleYellowLetters)).toEqual(0);
    expect(getLetterScore("PARTY", "E", 4, possibleYellowLetters)).toEqual(0);
});
