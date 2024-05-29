import { countSmilyFace } from "./smily";

describe("countSmilyFace", () => {
  test("should return the total number of smiling faces - case 1", () => {
    expect(countSmilyFace([":)", ";(", ";}", ":-D"])).toBe(2);
  });

  test("should return the total number of smiling faces - case 2", () => {
    expect(countSmilyFace([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });

  test("should return the total number of smiling faces - case 3", () => {
    expect(countSmilyFace([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });

  test("should return 0 for an empty array", () => {
    expect(countSmilyFace([])).toBe(0);
  });

  test("should return the total number of smiling faces - all valid", () => {
    expect(countSmilyFace([":)", ":D", ";-D", ":~)"])).toBe(4);
  });
});
