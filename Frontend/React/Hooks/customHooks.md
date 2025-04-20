[See how to create custom hooks with example](https://youtu.be/lAFbKzO-fss?si=OxNuZ6eidrwlxq85&t=20327w)

Note: Custom hooks are a powerful feature in React that allows you to extract and reuse logic across components. They are simply JavaScript functions that start with the word **"use"** and can call other hooks, unlike normal functions that can't call other hooks.

-------------

## Example and explanation in depth of doing things in the way it is


```tsx
// Import necessary hooks from React
import { useEffect, useState, useRef } from "react";

// Main App component
const App = () => {
  // State to store the interval callback function
  const [callback, setCallback] = useState(
    () => () => console.log("Initial callback")
  );

  // State to store the interval delay (in milliseconds)
  const [delay, setDelay] = useState(1000);

  // State to toggle visibility of NewComp
  const [showNewComp, setShowNewComp] = useState(true);

  return (
    <div>
      {/* Conditionally render NewComp and pass callback & delay as props */}
      {showNewComp && <NewComp callback={callback} delay={delay} />}

      {/* Toggle button to show/hide NewComp */}
      <button onClick={() => setShowNewComp(!showNewComp)}>
        Toggle NewComp
      </button>

      {/* Button to change the callback function */}
      <button
        onClick={() => setCallback(() => () => console.log("New callback"))}
      >
        Change Callback
      </button>

      {/* Input to dynamically change the delay */}
      <input
        type="number"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        placeholder="Set delay in ms"
      />

      <h1>App Component</h1>
      <h2>Current Delay: {delay} ms</h2>
    </div>
  );
};

// NewComp receives `callback` and `delay` as props
const NewComp = ({
  callback,
  delay,
}: {
  callback: () => void;
  delay: number;
}) => {
  // Custom hook to handle intervals properly in React
  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void | null>(null); // setting default value to null

    // Store the latest callback to avoid stale closure
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval with the given delay
    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current(); // Always call the latest callback
        }
      }

      const id = setInterval(tick, delay); // Start interval
      return () =>
        clearInterval(
          id
        ); /* Cleanup on unmount or delay change, so previous interval is cleared 
and therefore previous callback is not called */
    }, [delay]);
  };

  // Use the custom interval hook
  useInterval(callback, delay);

  return (
    <div>
      <h1>New Component</h1>
    </div>
  );
};

export default App;
```



----
Explanations(only read if you not understand): 
-----

**So first**,
## 🔁 Does useInterval(callback, delay) get called every time the component re-renders?
- ✅ Yes, the useInterval function does get called again on every render of the component — because it's a normal JavaScript function defined inside your component (i.e., NewComp).

**BUT…**
That doesn’t mean the interval is reset on every render. Why? 

## 🚀 Why it doesn't cause problems:
Let’s say you have this inside NewComp:

```tsx
useInterval(callback, delay);
```
### 🔄 What Happens When `NewComp` Re-renders?

1. **`useInterval` Function Execution**  
  Each time `NewComp` re-renders, the `useInterval` function is called again. However, this does not mean the interval itself is reset.

2. **Effect Behavior with `delay` Dependency**  
  Inside `useInterval`, the `useEffect(() => { ... }, [delay])` hook determines whether to re-run its logic:
  - If `delay` hasn't changed, the effect does not re-run.
  - As a result, the existing interval remains active and untouched(and so cleanup is also not called, and neither we need in the case until we need to call new interval).

3. **Ensuring the Latest `callback` is Used**  
  The other `useEffect(() => { savedCallback.current = callback }, [callback])` ensures that:
  - The `savedCallback.current` reference is updated to the latest `callback` function.
  - This guarantees that the interval always calls the most recent version of `callback`(because `console.log` inside interval callback is pointing to the refernce of `savedCallback` object), so even if the interval itself hasn't been reset, we still get the latest callback function running.

By separating the concerns of interval setup(only when `delay` changes) and callback updates, this approach avoids unnecessary resets(of removing previous intervalsand setting up new intervals) while ensuring the logic remains up-to-date.



-----

# 🔁 Understanding `useInterval`, Closures, and React State

_A complete intuitive guide based on questions and explanations_

---

## 📦 The Code Example

```tsx
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [callback, setCallback] = useState(
    () => () => console.log("Initial callback")
  );
  const [delay, setDelay] = useState(1000);
  const [showNewComp, setShowNewComp] = useState(true);

  return (
    <div>
      {showNewComp && <NewComp callback={callback} delay={delay} />}
      <button onClick={() => setShowNewComp(!showNewComp)}>
        Toggle NewComp
      </button>
      <button
        onClick={() => setCallback(() => () => console.log("New callback"))}
      >
        Change Callback
      </button>
      <input
        type="number"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        placeholder="Set delay in ms"
      />
    </div>
  );
};

const NewComp = ({
  callback,
  delay,
}: {
  callback: () => void;
  delay: number;
}) => {
  const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void | null>(null);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        if (savedCallback.current) {
          savedCallback.current(); // ✅ latest callback, but the query point comes when we think why not did this : `callback();`
        }
      };
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(callback, delay);

  return (
    <div>
      <h1>New Component</h1>
    </div>
  );
};

export default App;
```

---

## ❓ User’s Questions (Your Thoughts)

> ### ❓ "Isn’t the callback reference shared? So why doesn’t it update in the interval?"
>
> Intuitively I thought that if we pass a function as a prop, and then update that function with `setCallback`, it should automatically be reflected. Because functions are passed by reference, right?

> ### ❓ "Why does calling `callback()` directly inside the interval not reflect the updated callback?"

> ### ❓ "Why does `savedCallback.current()` work, but `callback()` doesn’t?"

---

## 📖 Concepts Explained

### ✅ How Closures Work in JavaScript

Closures **capture variables** from their surrounding scope **at the time the closure is created**. That includes variables like `callback`.

Even if `callback` is a reference to a function, **React re-creates a new reference on each render** when `setCallback` is called.

So if a closure was created earlier, it continues to hold onto the **old reference**, unless you explicitly re-run the closure setup (e.g., re-run `useEffect`).

---

### 🧠 What Is a Stale Closure?

A **stale closure** happens when a closure (like the function inside `setInterval`) captures variables that have since **changed**, but the closure still uses the **old snapshot**.

In your case:

```tsx
useEffect(() => {
  const id = setInterval(() => {
    callback(); // ❌ captured the old version of callback
  }, delay);
}, [delay]);
```

This interval function is holding on to **the version of `callback` that existed when the effect ran**, and won't know about future updates unless you include `callback` in the dependency array (which isn't always desirable for intervals).

---

### 💡 The Role of `useRef`

To solve this, we use `useRef`:

```tsx
const savedCallback = useRef<() => void>(callback);

useEffect(() => {
  savedCallback.current = callback; // ✅ always stores the latest callback
}, [callback]);

useEffect(() => {
  const id = setInterval(() => {
    savedCallback.current(); // ✅ calls the latest version every time
  }, delay);

  return () => clearInterval(id);
}, [delay]); // effect re-runs only if delay changes
```

This way:

- The interval is created only once (or when `delay` changes)
- The actual function that gets called can change independently
- `savedCallback.current()` will always refer to the latest version of the function

---

## 🔍 Live Binding vs Closure Binding

> In JS, **references are passed**, but **closures don’t hold live bindings** to those references.

A closure **does not see updates** to a variable unless you use something like `ref` or explicitly re-run the setup function.

---

## 🧪 Proof Demo

```tsx
let count = 0;

const callback = () => {
  console.log("Callback:", count);
};

count++;
setTimeout(callback, 1000); // Logs: Callback: 1 ✅
```

Now:

```tsx
let count = 0;

const callback = (() => {
  const captured = count; // count is number (number is primitive, copy by value)
  return () => {
    console.log("Captured:", captured);
  };
})();

count++;
setTimeout(callback, 1000); // Logs: Captured: 0 ❌ stale
```

---

## 🧭 Final Summary

| Concept                   | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| Stale Closure             | A function "remembers" old variables when defined in an old scope                |
| `callback()` in interval  | Calls an outdated version unless the interval is reset                           |
| `savedCallback.current()` | Ensures you're calling the **latest** version without resetting the interval     |
| `useEffect` dependency    | Only re-runs on listed changes; won't re-run on updated `callback` if not listed |
| `useRef` workaround       | Separates interval setup from function reference — the best of both worlds       |

---

# Why `useRef` Can't Be Replaced by a Regular Object in React

### ❌ Can this work?

```tsx
const savedCallback = {};
```

### ✅ Why this fails in React functional components

React **re-runs your component function** on every render. So if you do this:

```tsx
const savedCallback = {};
```

You're **creating a new object every render**. That means the old interval will close over an **old version** of `savedCallback`, and the next render creates a different object that the interval doesn’t know about.

So this fails:

```tsx
useEffect(() => {
  savedCallback.current = callback; // ❌ savedCallback is a brand new object now!
}, [callback]);
```

---

### ✅ Why `useRef` works

```tsx
const savedCallback = useRef();
```

React guarantees that `useRef()` returns the **same object** across re-renders. That’s why this works:

- `savedCallback.current` is **mutated**, not replaced, because `savedCallback` returns same object across re-renders, and that's why change in the reference of `savedCallback` object
- It stays the same reference across renders
- Perfect for stuff like holding a callback or DOM node

---

### 🔁 Visual Comparison

| What you write                    | What happens on re-render         |
| --------------------------------- | --------------------------------- |
| `const savedCallback = {};`       | ❌ New object on each render      |
| `const savedCallback = useRef();` | ✅ Same object across all renders |

---

### ✅ TL;DR

- Regular object: ❌ gets recreated each render → breaks closure
- `useRef`: ✅ persists across renders → perfect for stable references
