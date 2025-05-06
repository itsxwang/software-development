
# [useImperativeHandle Hook](https://react.dev/reference/react/useImperativeHandle#exposing-a-custom-ref-handle-to-the-parent-component)

## 🔧 What is `useImperativeHandle`?

`useImperativeHandle` is a React Hook that lets you customize the handle exposed as a ref.

### **Syntax**
```jsx
useImperativeHandle(ref, createHandle, dependencies?)
```

### **Parameters**
- **`ref`**: The forwarded ref from the parent (via `forwardRef`).
- **`createHandle`**: A function that returns the object you want the parent to access.
- **`dependencies`**: Optional — specifies when to recalculate the exposed object.

### **Usage**
- Exposing a custom ref handle to the parent component.
- Exposing your own imperative methods.

---

## ✅ Full Working Example

### 1. Child Component (Exposing a Custom Method)
```jsx
import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
  }));

  return <input ref={inputRef} type="text" />;
});
```

### 2. Parent Component
```jsx
import React, { useRef } from 'react';
import MyInput from './MyInput';

function App() {
  const inputRef = useRef();

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
}

export default App;
```

---

## 🔍 What’s Happening?

- `MyInput` uses a ref to the actual `<input>`, but hides it from the parent.
- It only exposes `focus()` and `clear()` methods.
- The `App` component calls those methods via the ref.


Note: You not need `forwardRef` in React 19+, it explained in docs