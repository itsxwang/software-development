# useSyncExternalStore

- Used to subscribe to external data sources like variables, outside components, event listeners, means whenever external data changes, it triggers the component to re-render,\
  it's one of React's lower-level hooks, but extremely useful when you're working with external (non-React) state sources, like:

      - Redux stores
      - Custom pub/sub systems
      - Browser APIs (like `localStorage` or `navigator.onLine`)
      - Data from `window`, `document`, or other global objects

## 🔧 What is useSyncExternalStore?

It's a hook introduced in React 18 for safely subscribing to external stores, with built-in support for concurrent rendering (unlike useEffect-based hacks before).

## ✅ Signature:

```jsx
const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
```

## 🧩 Parameters:

| Parameter                      | Description                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `subscribe(fn)`                | A function that lets React subscribe to store changes. It should call `fn()` when the store updates. |
| `getSnapshot()`                | Returns the **current value** from the store (the actual state).                                     |
| `getServerSnapshot` (optional) | Used for SSR (server-side rendering), can usually be skipped on the client.                          |

## 🔍 How It Works (Step-by-Step):

1. React calls `getSnapshot()` to read the current store value during rendering.

2. React uses `subscribe()` to be notified when the store updates.

3. When the store notifies React (via the function passed to `subscribe()`), React re-renders and calls `getSnapshot()` again to get the new value.

## ✅ Simple Example — Listen to `window.innerWidth`:

```js
import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  return window.innerWidth;
}

function WindowWidth() {
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return <div>Window width: {width}px</div>;
}

export default WindowWidth;
```

## 📌 What’s happening here:

1. `subscribe(callback)`:

- React gives you a callback.
- You hook it into your external store (resize event here).
- You return a cleanup function to remove the listener.

2. `getSnapshot()`:

- It returns the current value React should use.
- Must be pure and synchronous — e.g., `window.innerWidth`.

### Note:

But in above code cleanup function not require, because the function we passed to `useSyncExternalStore` is outside, and therefore when we call `useSyncExternalStore` again and again the same function is passed(new function is not created), and therefore cleanup function is not required. But when we pass function(subscribe) from inside the function that re-renders, there we need cleanup .

```jsx
import { useSyncExternalStore } from "react";

function getSnapshot() {
  return window.innerWidth;
}


function WindowWidth() {
  function subscribe(callback) {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return <div>Window width: {width}px</div>;
}

export default WindowWidth;
```

- So Here we need cleanup because everytime the component re-renders, the new `subscribe` function is created and then passed, and therefore cleanup function is required. And this return function(cleanup) call by react when we pass new `subscribe` function passed to `useSyncExternalStore` function(here on re-renders of the `WindowWidth` component).
