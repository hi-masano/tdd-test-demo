"use client";

import { useState } from "react";
import { add } from "@/lib/calculator";

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [left, setLeft] = useState<number | null>(null);
  const [fresh, setFresh] = useState(true); // 次の数字入力で表示を置き換えるか

  const pressDigit = (d: string) => {
    setDisplay(fresh || display === "0" ? d : display + d);
    setFresh(false);
  };

  const pressPlus = () => {
    if (fresh) return; // 数字未入力での連打は無視
    setLeft(left === null ? Number(display) : add(left, Number(display)));
    setFresh(true);
  };

  const pressEquals = () => {
    if (left === null || fresh) return;
    setDisplay(String(add(left, Number(display))));
    setLeft(null);
    setFresh(true);
  };

  return (
    <main className="calc">
      <div className="display" data-testid="display">{display}</div>
      <div className="keys">
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((d) => (
          <button key={d} onClick={() => pressDigit(d)}>{d}</button>
        ))}
        <button onClick={pressPlus}>+</button>
        <button onClick={pressEquals}>=</button>
      </div>
    </main>
  );
}
