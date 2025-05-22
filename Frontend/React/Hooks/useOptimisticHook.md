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

-------

### You can also implement optimistic UI updates using `useState` also

```jsx
import { useState, useRef } from "react";

export default function App() {
  const [todo, setTodo] = useState([{ title: "todo", id: 1 }]);
  const [optimisticTodo, setOptimisticTodo] = useState({});
  const [item, setItem] = useState("");
  const id = useRef(2);

  function handleAdd(e) {
    e.preventDefault();
    const newItem = { title: item, id: id.current++, optimistic: true };

    // Add to optimistic UI immediately
    setOptimisticTodo(newItem);
    setItem("");

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({
        title: "todos",
        body: item,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Add to real todos
          setTodo((prev) => [...prev, { ...newItem, optimistic: false }]);
        }
      })
      .catch(console.error)
      .finally(() => {
        // Remove from optimistic list regardless of success or failure
        setOptimisticTodo({});
      });
  }

  const allTodos = [...todo, optimisticTodo];

  return (
    <>
      <form onSubmit={handleAdd}>
        <label htmlFor="todo">
          New Todo:
          <br />
          <input
            type="text"
            id="todo"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <hr />
        <button type="submit">Add</button>
      </form>

      <h2>Your TODOS:</h2>
      <ul>
      {allTodos.map((todo) => 
      { return todo.id ?  (
        <li key={todo.id} style={{ color: todo.optimistic ? "#D3D3D3" : "black" }}>
          {todo.title}
        </li>
      ) : null }
      )}
      </ul>
    </>
  );
}
```