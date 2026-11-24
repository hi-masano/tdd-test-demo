"use client";

import { useState } from "react";
import { initialState, press } from "@/lib/calculator";

const KEYS = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "+", "="];

export default function Home() {
  const [state, setState] = useState(initialState);

  return (
    <main className="calc">
      <div className="display" data-testid="display">{state.display}</div>
      <div className="keys">
        {KEYS.map((k) => (
          <button key={k} onClick={() => setState((s) => press(s, k))}>{k}</button>
        ))}
      </div>
    </main>
  );
}
