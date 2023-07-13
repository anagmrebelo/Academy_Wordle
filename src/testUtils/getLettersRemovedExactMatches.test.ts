import { getLettersRemovedExactMatches } from "../utils/getLettersRemovedExactMatches";

test("Attempt: EEEEE solution: DERMA", () => {
    expect(getLettersRemovedExactMatches("DERMA", "EEEE")).toEqual(
        "DRMA".split("")
    );
});

test("Attempt: LULLA solution: LEVEL", () => {
    expect(getLettersRemovedExactMatches("LEVEL", "LULLA")).toEqual(
        "EVEL".split("")
    );
});

test("Attempt: STEEL solution: LEVEL", () => {
    expect(getLettersRemovedExactMatches("LEVEL", "STEEL")).toEqual(
        "VEL".split("")
    );
});
