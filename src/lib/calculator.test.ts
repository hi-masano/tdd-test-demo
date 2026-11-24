import { describe, it, expect } from "vitest";
import { add, initialState, press } from "./calculator";

const run = (...keys: string[]) =>
  keys.reduce(press, initialState).display;

describe("add", () => {
  it("2つの数の合計を返す", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("press", () => {
  it("起動直後は 0 を表示する", () => {
    expect(initialState.display).toBe("0");
  });

  it("数字を押すと、その数字が表示される(先頭の 0 は残らない)", () => {
    expect(run("5")).toBe("5");
  });

  it("数字を続けて押すと、桁が増えていく", () => {
    expect(run("1", "2")).toBe("12");
  });

  it("= を押すと、+ の左の数と表示中の数の合計が表示される", () => {
    expect(run("1", "2", "+", "3", "0", "=")).toBe("42");
  });

  it("数字が入力されるまで、+ は効かない", () => {
    expect(run("2", "+", "+")).toBe("2");
  });

  it("+ を押す前の = は効かない", () => {
    expect(run("=")).toBe("0");
  });
});
