# 📡 React Subscriptions Explained

In React, **subscriptions** are a type of side effect — they let your component "subscribe" to external data sources and be notified when things change.

---

## 👂 What are Subscriptions?

> "Hey React, tell me whenever *this thing* changes so I can update the UI."

They allow your component to "subscribe" to updates and changes from:

| Use Case                      | Example Source            | What You're Listening To              |
|-------------------------------|---------------------------|----------------------------------------|
| Real-time chat updates        | WebSocket                 | New messages                          |
| User presence status          | Firebase Realtime DB      | Online/offline events                 |
| Device data                   | Event listeners           | Mouse movement, scroll, resize        |
| Global state (e.g. Redux)     | Redux store               | State changes                         |
| Observables                   | RxJS                      | Stream data like loading progress     |

---

## ✅ Example Code

```js
useEffect(() => {
  const unsubscribe = someDataSource.subscribe(data => {
    setData(data); // update React state
  });

  // 🧹 Cleanup
  return () => {
    unsubscribe(); // remove listener
  };
}, []);
```

This ensures:
- You **start** listening when the component **mounts**
- You **stop** listening when the component **unmounts**

---

## 🛑 Why Cleanup is Important?

If you don’t "unsubscribe", your component may:
- Keep listening even when unmounted ❌
- Cause memory leaks ❌
- Throw errors like "can’t set state on unmounted component" ❌

---

## 🧠 Summary

**Subscriptions = Side effects that "listen" to external changes and update React accordingly.**

---

### 🔥 Common Uses:

- APIs that emit real-time updates
- Event listeners (scroll, resize)
- Streams or sockets (WebSockets, Firebase)
- Global state managers (Redux)

