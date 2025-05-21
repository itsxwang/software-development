#  [useLayoutEffect hook](https://youtu.be/wU57kvYOxT4?si=E1UB21GQeVpJKsWG&t=27) 

## What is `useLayoutEffect`?

The `useLayoutEffect` hook in React is similar to `useEffect`, but it differs in **when** it executes. While `useEffect` runs asynchronously after the browser has painted, `useLayoutEffect` runs **synchronously after all DOM mutations** (after React calculates the DOM changes) but **before** the browser has a chance to paint.

---

## 🧠 When to Use `useLayoutEffect`

Use `useLayoutEffect` when you need to interact with the DOM **immediately after React has made changes, but before the browser paints**. Typical scenarios include:

- **Measuring DOM elements:**  
    Read layout properties such as *size* or *position* right after rendering.

- **Synchronously mutating the DOM:**  
    Apply changes that must occur before the browser paints, to prevent visual glitches.

- **Coordinating animations:**  
    Set up animations that require precise measurements or immediate DOM updates.

---

## ⚠️ Important Considerations

- **Performance:**  
    Because `useLayoutEffect` runs synchronously, it can block the browser's painting process. Use it sparingly and only when necessary.

- **Server-Side Rendering (SSR):**  
    `useLayoutEffect` does **not** run during SSR. If you need to avoid warnings during SSR, consider using `useEffect` instead.

- **Cleanup Functions:**  
    Like `useEffect`, `useLayoutEffect` can return a cleanup function to run when the component unmounts or before the effect runs again.

In summary, while `useLayoutEffect` and `useEffect` are similar, the key difference lies in their execution timing. Use `useLayoutEffect` when you need to perform DOM measurements or mutations before the browser paints, ensuring that your updates are applied synchronously to prevent visual inconsistencies.