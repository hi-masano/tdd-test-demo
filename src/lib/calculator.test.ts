import { describe, it, expect } from "vitest";
import { add, initialState, press } from "./calculator";

const run = (...keys: string[]) =>
  keys.reduce(press, initialState).display;

describe("add", () => {
  it("2 + 3 は 5", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("press", () => {
  it("初期表示は 0", () => {
    expect(initialState.display).toBe("0");
  });

  it("数字を押すと表示が置き換わる(0 の次は 05 にならない)", () => {
    expect(run("5")).toBe("5");
  });

  it("数字を続けて押すと桁が増える", () => {
    expect(run("1", "2")).toBe("12");
  });

  it("2 + 3 = は 5", () => {
    expect(run("2", "+", "3", "=")).toBe("5");
  });

  it("数字なしの + 連打や = は表示を変えない", () => {
    expect(run("2", "+", "+")).toBe("2");
    expect(run("=")).toBe("0");
  });
});
