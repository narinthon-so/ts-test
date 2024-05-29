import { manipulate } from "./manipulate";

describe("manipulate", () => {
  test("should return all permutations of a single character string", () => {
    expect(manipulate("a")).toEqual(["a"]);
  });

  test("should return all permutations of a two character string", () => {
    const result = manipulate("ab");
    expect(result.sort()).toEqual(["ab", "ba"].sort());
  });

  test("should return all permutations of a three character string", () => {
    const result = manipulate("abc");
    expect(result.sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );
  });

  test("should return all permutations of a string with duplicate characters", () => {
    const result = manipulate("aabb");
    expect(result.sort()).toEqual(
      ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort()
    );
  });
});
