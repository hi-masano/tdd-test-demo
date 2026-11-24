import { describe, it, expect } from "vitest";
import { add } from "./calculator";

describe("add", () => {
  it("2 + 3 は 5", () => {
    expect(add(2, 3)).toBe(5);
  });
});
