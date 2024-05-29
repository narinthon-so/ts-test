import { findOddNumber } from "./odd-number";

describe("findOddNumber", () => {
  test("should return the integer that appears an odd number of times - single element array", () => {
    expect(findOddNumber([7])).toBe(7);
  });

  test("should return the integer that appears an odd number of times - single element array with 0", () => {
    expect(findOddNumber([0])).toBe(0);
  });

  test("should return the integer that appears an odd number of times - multiple elements", () => {
    expect(findOddNumber([1, 1, 2])).toBe(2);
  });

  test("should return the integer that appears an odd number of times - multiple elements with 0", () => {
    expect(findOddNumber([0, 1, 0, 1, 0])).toBe(0);
  });

  test("should return the integer that appears an odd number of times - complex case", () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
