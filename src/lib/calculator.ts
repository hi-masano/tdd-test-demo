export function add(a: number, b: number): number {
  return a + b;
}

export type State = {
  display: string; // 画面に出ている文字列
  left: number | null; // "+" の左側として覚えている数
  fresh: boolean; // true なら次の数字入力で表示を置き換える
};

export const initialState: State = { display: "0", left: null, fresh: true };

export function press(state: State, key: string): State {
  if (/^[0-9]$/.test(key)) {
    const replace = state.fresh || state.display === "0";
    return { ...state, display: replace ? key : state.display + key, fresh: false };
  }

  if (key === "+") {
    if (state.fresh) return state; // 数字未入力での連打は無視
    const current = Number(state.display);
    const left = state.left === null ? current : add(state.left, current);
    return { ...state, left, fresh: true };
  }

  if (key === "=") {
    if (state.left === null || state.fresh) return state;
    const result = add(state.left, Number(state.display));
    return { display: String(result), left: null, fresh: true };
  }

  return state;
}
