# Node.js Event Loop: Detailed Explanation

This document explains the phases of the **Node.js Event Loop** in detail, based on the visual reference.

---

## 🌐 What is the Event Loop in Node.js?

Node.js is **single-threaded**, but it's designed to handle **non-blocking I/O operations**. Instead of waiting for tasks like file reads, network requests, or timers to finish, Node.js **delegates** them to the system and uses an **event loop** to **check when these tasks are done** and then executes their callbacks.

The **Event Loop** is the mechanism that handles:
- Executing callbacks
- Handling events
- Coordinating timers, I/O, and internal operations

---

## 🔄 Phases of the Event Loop (with detailed explanation)

The Event Loop has **multiple phases**, and each has a specific purpose. Here's a step-by-step explanation of each phase:

---

### 1. 🟠 `timers`
> _"This phase executes callbacks scheduled by `setTimeout()` and `setInterval()`."_

**Explanation:**
- This phase handles **timers**.
- When you do:
  ```js
  setTimeout(() => console.log('timeout!'), 1000);
  ```
  This callback gets executed in the **timers phase** after at least 1000ms.
- It does **not guarantee exact timing**, just that the callback **won't be run before the timer expires**.
- `setInterval()` works similarly but repeats.

---

### 2. 🟡 `pending callbacks`
> _"Executes I/O callbacks deferred to the next loop iteration."_

**Explanation:**
- Some **system-level operations** (e.g., TCP errors) are not handled immediately.
- They get scheduled to run in the **next iteration** of the event loop.
- Example: low-level errors from the OS or deferrals from the `poll` phase.

---

### 3. 🔵 `idle, prepare`
> _"Only used internally."_  

**Explanation:**
- This phase is used **internally by Node.js**, and most users don’t interact with it.
- It does **internal bookkeeping**, like setting things up for the next phase (poll).
- You generally don’t need to worry about it unless you’re hacking Node.js internals.

---

### 4. 🔴 `poll`
> _"Retrieve new I/O events; execute I/O related callbacks... node will block here when appropriate."_

**Explanation:**
- **Core phase** of the Event Loop.
- It does two main things:
  1. **Check if I/O events (like file read, socket messages) are ready**, and execute their callbacks.
  2. If no timers or other events are waiting, **Node.js will wait here** for more events (blocking if needed).

🚫 **Poll does not run:**
- `setTimeout()` callbacks
- `setImmediate()` callbacks
- Close events

➡ These are handled in their respective phases.

---

### 5. 🟢 `check`
> _"`setImmediate()` callbacks are invoked here."_

**Explanation:**
- This phase is for the **`setImmediate()`** API.
- `setImmediate()` is similar to `setTimeout(() => ..., 0)` but it’s scheduled for the **end of the current event loop cycle**(when all statements of a script execute).
- Useful when you want to execute something **after all I/O events are processed**.

Example:
```js
setImmediate(() => console.log('Runs in check phase'));
```

---

### 6. 🟣 `close callbacks`
> _"Some close callbacks, e.g., `socket.on('close', ...)`."_

**Explanation:**
- When something closes (like a TCP socket, file stream, etc.), the system schedules a `close` event.
- That callback gets executed here.

Example:
```js
socket.on('close', () => {
  console.log('Connection closed');
});
```

---

## 🧠 Summary Table

| Phase            | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| `timers`         | Executes `setTimeout` and `setInterval` callbacks                       |
| `pending callbacks` | Handles system-level I/O callbacks postponed to the next loop         |
| `idle, prepare`  | Internal setup – not accessible from user-land code                     |
| `poll`           | Waits for and executes I/O-related callbacks (file read, net data, etc.)|
| `check`          | Executes `setImmediate()` callbacks                                     |
| `close callbacks`| Executes callbacks for close events (e.g., socket/file close)           |

---

## ⚖️ How `setTimeout()` vs `setImmediate()` behave differently

```js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```

- Even though both are scheduled to run immediately, the **order depends on the current phase**:
  - If called **from inside an I/O callback**, `setImmediate()` runs **before** `setTimeout`.
  - If called in the **main module**, `setTimeout()` might run first.

---

## ✅ Final Tips

- Think of the event loop as a **queue processor**: each phase is like a section of the queue where only certain types of tasks are processed.
- If you’re building high-performance servers in Node.js, understanding this order helps you avoid delays and bottlenecks.
