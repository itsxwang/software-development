[`useEffect` hook](https://youtu.be/-4XpG5_Lj_o?si=MZVcIH39AcRWKzt8)

- Effects are reactive blocks of code.

- Basically doing side effects(that impact things outside the component) during rendering are called `effects`.

- Note: Effects are different from events, because events are triggered by user interaction(like clicking the button, or typing in input), and effects are triggered by state changes or props changes, and effects are part of the render output.

- **_useEffect_** Hook allows you to perform side effects(**operations that impact things outside the component**) in your components. Some examples of side effects are: fetching data, directly updating the DOM etc.

- [What are side effect](https://youtu.be/lAFbKzO-fss?si=RWqnr78ckl2E0sn1&t=15707)

- [Here's full detailed docs on effects](https://react.dev/learn/synchronizing-with-effects)

**_If you add an value to dependency array, useEffect will run only when that value changes and when the component mounts(first render)_**

Note: The **_useEffect_** hook's callback function executes after the component has rendered and the browser has painted the updated UI to the screen. This means that any code inside useEffect runs post-render, not during the render phase.

Note: The `useEffect` callback function should not be defined with `async` keyword. Because `useEffect` callbacks are synchronous to prevent race conditions.

**_The effects run in the order they are declared, but the cleanup functions(functions return by `useEffect`) run in reverse order._**

### 🧠 Understanding useEffect Execution Timing

When a component's state or props change, React follows this sequence:

1. **Render Phase**: React calculates the new UI based on the updated state or props.
2. **Commit Phase**: React applies the changes to the DOM.
3. **Browser Paint**: The browser updates the screen to reflect the changes.
4. **useEffect Execution**: After the paint, React runs the functions inside `useEffect`.

This deferred execution ensures that side effects, such as data fetching or subscriptions, do not block the rendering process, leading to smoother UI updates.

```js
useEffect(
  () => {
    // update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },
  // add count as a second argument
  [count] // dependency array, and linter will automatically infer what should be dependency in dependency array based on the reactive value you using in the effect
);
```

- [Sometimes your linter will give error, but Don’t fix those problems causing errors by suppressing the linter, instead try that](https://react.dev/learn/lifecycle-of-reactive-effects#what-to-do-when-you-dont-want-to-re-synchronize)

One more thing:

```js
const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...
}
```

Here your linter will not say that you have also have to add `serverUrl` to dependency array, because its not a reactive value, and this is also correct because serverUrl never changes due to a re-render.

Note: Props, state, and other values declared inside the component are reactive because they’re calculated during rendering and participate in the React data flow. [All variables declared in the component body are also reactive.](https://react.dev/learn/lifecycle-of-reactive-effects#all-variables-declared-in-the-component-body-are-reactive)

To ignore a linter suggests dependencies, use this code `// eslint-ignore-next-line react-hooks/exhaustive-deps`

Example Code:-

```js
useEffect(() => {
  // ...
  // 🔴 Avoid suppressing the linter like this:
  // eslint-ignore-next-line react-hooks/exhaustive-deps
}, []);
```

[Important things when working with `useEffect`](https://youtu.be/M9O5AjEFzKw?si=QDZwT5l5OmixE2PR&t=9971)

[Example of `useEffect`](https://youtu.be/M9O5AjEFzKw?si=aOEJMywWOYehdmpQ&t=10047)

[Fetch data using useEffect](https://youtu.be/M9O5AjEFzKw?si=bn4UHz9s16pAOe8g&t=10501)

---

Returning a function from useEffect

## 🧠 Why We Return a Function from useEffect

In React, when you return a function inside useEffect, you're telling React:

> “Hey! When this component(the component in which that hook is located) unmounts or before re-running this effect, please run this cleanup function!”

**_Note: If dependency array is empty the cleanup function runs only when the component unmounts, but if dependency array is not empty then the cleanup function when the dependency array value changes_**

- [Example of cleanup function runs when component unmounts](https://youtu.be/lAFbKzO-fss?si=HKRBWd4aipXeEibC&t=19837)

### Example:

```js
useEffect(() => {
  intervalRef.current = setInterval(() => {
    setTime((time) => time + 1);
  }, 1000);

  return () => {
    clearInterval(intervalRef.current); // ⛔ cleanup
  };
});
```

#### 🔁 What's Happening in Your Code?

#### ⏰ What this means:

1. When your component renders:

- It sets up a setInterval, which updates the time every second.
- The interval ID is stored in `intervalRef.current`.

2. When your component unmounts (or re-renders again here, **_but Note: re-renders means when your same component updates and unmount means when the component destroys(remove from dom or we can say becomes unexist from dom_**)):

- React automatically runs the cleanup function returned by useEffect, .
- This function clears the interval so it(previous interval) doesn't keep running in the background.

#### 🤔 Why is Cleanup Important?

Without `clearInterval` in the cleanup:

- The timer would keep running even after the component is gone.
- That can cause:

  - ❌ Memory leaks

  - ❌ Performance issues

  - ❌ Unexpected behavior

#### 🧪 Want to avoid effect running on every render?

**You can add an empty dependency array like this:**

```jsx
useEffect(() => {
  intervalRef.current = setInterval(() => {
    setTime((time) => time + 1);
  }, 1000);

  return () => clearInterval(intervalRef.current);
}, []); // ✅ Now runs only on first mount & cleanup on unmount
```

#### 🔄 How Cleanup Works in Lifecycle Terms

In traditional class components, it's like this:

```js
componentDidMount() {
  // setup code
}
componentWillUnmount() {
  // cleanup code
}
```

In functional components using `useEffect`, both are handled in one place:

```js
useEffect(() => {
  // setup code
  return () => {
    // cleanup code
  };
}, []);
```

---

### Detailed Comparison when cleanup function(function return by `useEffect`) runs

1. #### Relative to Component Rendering

- Cleanup runs after the component function executes but before:
  - The new effect callback (on updates)
  - The component unmounts (means when component removed from the dom)

2. #### Relative to DOM Updates

- Cleanup runs after React calculates the new DOM changes but before:
  - Those changes are painted to the screen
  - The new effect runs

3. #### Relative to Other Effects

- Cleanup functions run in the same order as the effects

```js
useEffect(() => {
  // Effect 1 runs first
  return () => {
    /* Cleanup 1 runs first */
  };
});

useEffect(() => {
  // Effect 2 runs second
  return () => {
    /* Cleanup 2 runs second */
  };
});
```
