[Understand `useCallback` in React](https://youtu.be/_AyFP5s69N4?si=YmZEAeDauCLXzDGS)

[Difference between `useCallback` and `useMemo`](https://youtu.be/_AyFP5s69N4?si=CwNW8WjQuJz5TgBo&t=277)

- The exmaple in the given video uses `useCallback` to do the same thing as below code does, but `useCallback` is still good and cleaner in the case where you need to memoize a function(not function call, for that use `useMemo`)

```tsx
import { useEffect, useState, useMemo } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState("light");

  // ✅ useMemo returns a function (no args to the outer arrow function)
  const getitems = useMemo(() => {
    return (i: number) => {
      return [i + num, i + 1 + num, i + 2 + num];
    };
  }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <List getitems={getitems} />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme ({theme})
      </button>
    </div>
  );
}

function List({ getitems }: { getitems: (i: number) => number[] }) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getitems(1));
    console.log(getitems(2));
  }, [getitems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default App;
```
