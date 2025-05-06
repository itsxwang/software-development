- [`useRef` Hook](https://youtu.be/M9O5AjEFzKw?si=zm6vZcyqCRyGD4g6&t=13351) 
- [Here is the full docs on `useRef` Hook](https://react.dev/learn/referencing-values-with-refs)

- [`useRef` Example](https://youtu.be/M9O5AjEFzKw?si=RPKCxsdsnOmgOxSA&t=13367)
    - ***useRef*** Hook provides a way to access and interact with DOM elements or to persist values(***useRefObject***) across renders without causing a re-render.\
and `useRef` creates a mutable object that persists across component re-renders. This object has a `.current` property where you can store values that you want to retain between renders without causing a re-render when they change.

useRef hook in React used to:
1. Reference DOM elements directly
2. Persist values across renders without causing a re-render

## 📌 Syntax

```js
const ref = useRef(initialValue);
```

- `myRef.current` is the actual value.
- The object returned by `useRef()` will stay the same between renders.



## ✅ Use Case #1: Accessing DOM elements

#### Example: Auto focus an input
```js
import React, { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Focus the input when component mounts
  }, []);

  return <input ref={inputRef} placeholder="Type something..." />;
}

export default App;
```

## 🧠 Why this works:
- `inputRef.current` refers to the actual DOM node.

- It's like `document.querySelector()`, but React-friendly.


## ✅ Use Case #2: Storing mutable values without re-rendering

#### Example: Track how many times a button is clicked
```js
import React, { useRef, useState } from 'react';

function App() {
  const countRef = useRef(100);
  const [renderCount, setRenderCount] = useState(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Clicked:", countRef.current); // logs without causing re-render
  };

  return (
    <div>
      <p>Button clicked {countRef.current} times (check console)</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setRenderCount(Math.random())}>Re-render</button>
    //   Math.random() just for re-rendering
    </div>
  );
}

export default App;
```

- `useRef` stores data between renders but doesn’t trigger re-renders.
- Unlike `useState`, updating `useRef.current` does not re-render the component.

## ✅ Use Case #3: Holding previous values

```js
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Now: {count}</h1>
      <h2>Before: {prevCount.current}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}
```
- `useEffect` runs after the dom painted the updated UI to the screen.Cause of this, the `useEffect` callback function(***including `prevCount.current`*** updation) runs after the component rendered and that's why `<h2>Before: {prevCount.current}</h2>` shows previous value of `prevCount.current`, that result in that it will render previous value of `previous.count` because first dom paint the updated Ui, after then only `useEffect` runs and update the `prevCount.current` value.


## ✅ Use Case #4: Accessing DOM elements(Assigning DOM elements to a `prevCount.current`)

```js
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```
In this example, `inputRef` is a ref object created by `useRef(null).` By assigning `inputRef` to the ref attribute of the **input** element, React will set `inputRef.current` to the corresponding DOM node when the component mounts(***first renders***). This allows you to directly access and manipulate the DOM element, such as focusing the input field.​

----
## useRef callback 

- ✅ What does ref={callback} mean?

You're passing a function to the `ref` attribute.\
This function is called by React:
- with the DOM element as the first argument when it mounts
- with `null` when it unmounts

So: 

```jsx
ref={(node) => {
  // node is the actual DOM element
  if (node !== null) {
    // mounted
  } else {
    // unmounted
  }
}}
```


- Example: 

```jsx
function MyComponent() {
  const handleRef = (element) => {
    if (element) {
      console.log("Element mounted:", element);
    } else {
      console.log("Element unmounted");
    }
    return () => console.log('cleanup function'); // always called by the react when the component unmounts
  };

  return <div ref={handleRef}>Hello</div>;
}
```

# 📦 Use cases for callback refs:
- You want to perform actions when the element appears/disappears.
- You want to set multiple refs dynamically.[This is a good example for this](https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback)
- You need to imperatively control something on the DOM node (like focusing, measuring, animations).

Note: **When Strict Mode is enabled, ref callbacks will run twice in development.** 



