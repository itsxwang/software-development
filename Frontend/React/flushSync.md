# [FlushSync](https://react.dev/learn/manipulating-the-dom-with-refs#flushing-state-updates-synchronously-with-flush-sync)    <small>is a function from the react-dom package that **forces React to flush updates synchronously** — that is, **immediately, before continuing to the next task.**,  its used  when you want to force React to update (“flush”) the DOM synchronously, instead of waiting for the next render cycle.</small>

- Normally, React batches updates for performance. But sometimes, you want to force an update to happen right away — and that’s when `flushSync()` comes in.

```jsx 
import { flushSync } from 'react-dom';
```

## 🧪 Why/When to Use flushSync
- When you're making DOM changes that rely on the latest React state immediately.

- When you need to measure the DOM after a state update, and you want React to re-render before your next code runs(**often in event handlers**).

- For example, **scroll position adjustments**(above docs example), **measurements**, **animations**, etc.

## 📌 Example: Without `flushSync` (broken layout)

```jsx
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(['A', 'B']);

  const addItem = () => {
    setItems(prev => [...prev, 'C']);
    // DOM hasn't updated yet!
    console.log(document.getElementById('C')); // ❌ null
  };

  return (
    <div>
      <button onClick={addItem}>Add C</button>
      {items.map(item => (
        <div key={item} id={item}>{item}</div>
      ))}
    </div>
  );
}

export default App;
```

In the above case, the `console.log()` runs before React has committed the DOM changes, so you get `null`.


## ✅ Fixed with flushSync
```jsx
import { useState } from 'react';
import { flushSync } from 'react-dom';

function App() {
  const [items, setItems] = useState(['A', 'B']);

  const addItem = () => {
    flushSync(() => {
      setItems(prev => [...prev, 'C']);
    });
    // DOM is now updated immediately
    console.log(document.getElementById('C')); // ✅ works
  };

  return (
    <div>
      <button onClick={addItem}>Add C</button>
      {items.map(item => (
        <div key={item} id={item}>{item}</div>
      ))}
    </div>
  );
}

export default App;
```


Note: If you do : 
```jsx
//   items is still the old state from this closure
  console.log(items); // ❌ still ['A', 'B']
```
you still get `['A', 'B']` instead of `['A', 'B', 'C']` , Because JS closures don’t auto-update with state, (then why `document.getElementById('C')` works? Because `flushSync` forces immediate DOM update before executing next line of code), and if you think `document` is object, and objects are shared by reference.

So this behavior because, JavaScript closures don’t magically get re-evaluated. Even though the DOM is updated, the variables inside your current function (like `items`) still hold their old values.


## 🚨 When NOT to Use flushSync
- Don’t use it everywhere — it's bad for performance if overused.

- It forces React out of concurrent mode behavior and blocks the UI thread.

- Use it only when necessary, e.g., measuring DOM after an update or synchronizing external libraries.
