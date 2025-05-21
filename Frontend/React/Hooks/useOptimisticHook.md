[**useOptimistic** Hook](https://youtu.be/M4BtR93fydQ?si=1liwjwWvtu0SvjuY)

[useOptimistic docs](https://react.dev/reference/react/useOptimistic)

## ✅ Part 1 [What are **Optimistic** updates?](https://youtu.be/M3mGY0pgFk0?si=uWg2ADlmsSG-HnTT&t=27)

**Optimistic updates** are a UI technique where the interface is updated immediately as if an operation (such as form submission or data mutation) has already succeeded, even before receiving a server response.

### 🔁 Why Use Optimistic Updates?

- **Improves user experience:** The app feels faster and more responsive.
- **Reduces perceived latency:** Users see the result of their actions immediately.
- **Common in apps like:**
  - Twitter (posting a tweet)
  - Trello (moving a card)
  - Instagram (liking a photo)

### 🔧 How It Works

1. **User triggers an action** (e.g., adds a comment).
2. **UI immediately reflects the change** (the comment appears in the list).
3. **A network request is sent** in the background to persist the change.
4. **If the request succeeds:** Nothing changes.
5. **If the request fails:** Roll back the optimistic update and show an error.

---

## ✅ Part 2: [`useOptimistic` Hook in React](https://youtu.be/M4BtR93fydQ?si=zR_Gxy9zCoLaDjOw&t=317)

`useOptimistic` is a **React hook** introduced to make implementing optimistic UI updates easier in React apps, especially when working with Server Actions in React Server Components (RSC) or Next.js App Router.

> ⚠️ useOptimistic is mainly used in React 18+ and is especially relevant in Next.js with Server Actions.

### For example:

```jsx
import { startTransition, useState, useOptimistic } from "react";

// Example component using useOptimistic for optimistic UI updates
export default function App() {
  // State to track the actual send status
  const [send, setSend] = useState("...");

  // useOptimistic manages the optimistic state and provides a setter
  // The updater function determines how to merge optimistic updates
  //   here `send` thar we want optimistic value of
  const [optimistic, setOptimistic] = useOptimistic(send, updaterFunc);

  // Updater function for useOptimistic
  function updaterFunc(prev, newOptimisticState) {
    // In this simple case, just use the new optimistic state
    return newOptimisticState;
  }

  // Handler for sending the request
  function handleSendReq() {
    // its required to wrap optimistic state in `startTransition` callback, to use optimistic hook
    startTransition(async () => {
      // Immediately update the optimistic state
      setOptimistic("sended"); // until the transition is finished, the optimistic state will be "sended"
      try {
        // Simulate a network request
        const response = await fetch("https://httpbin.org/get");
        const data = await response.json();
        /* On success, update the actual state, 
        if not
        then when transition will be finished, 
        we know that the actual state will be "sended"
        */
        setSend("sended");
      } catch {
        // On failure, update the actual state to indicate failure, means rollback to the actual final state
        setSend("failed");
      }
    });
  }

  return (
    <div>
      <button onClick={handleSendReq}>Send request</button>
      {/* Show the optimistic status in the UI */}
      <p>Sended status: {optimistic}</p>
    </div>
  );
}
```

---

### We use `startTransition`, we can also use `formAction` way also:

```jsx
import { startTransition, useState, useOptimistic } from "react";

export default function App() {
  const [send, setSend] = useState("...");

  const [optimistic, setOptimistic] = useOptimistic(send, updaterFunc);

  function updaterFunc(prev, newOptimisticState) {
    return newOptimisticState;
  }

  async function handleSendReq() {
    setOptimistic("sended");
    try {
      const response = await fetch("https://httpbin.org/get");
      const data = await response.json();
      setSend("sended");
    } catch {
      setSend("failed");
    }
  }

  return (
    <form>
      <button formAction={handleSendReq}>Send request</button>
      <p>Sended status: {optimistic}</p>
    </form>
  );
}
```
