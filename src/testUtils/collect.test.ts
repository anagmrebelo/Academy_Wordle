import { collect } from "../utils/collect";

test("Collect 6 empty string", () => {
    expect(collect("", 6)).toEqual(["", "", "", "", "", ""]);
});

test("Collect 3 'wordle'", () => {
    expect(collect("wordle", 3)).toEqual(["wordle", "wordle", "wordle"]);
});
