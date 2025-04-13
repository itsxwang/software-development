
# Why You Can't Change `value={1}` in React Inputs

### 🎯 The Problem

When you write this:

```jsx
<input type="number" value={1} />
```

You're telling React:

> "This input's value is **always** equal to `1`."

So, even if the user tries to type something else, React **re-renders and resets it back to 1**.

---

### ⚙️ Controlled vs. Uncontrolled Inputs

- **Controlled Input**:
  - Uses `value` prop.
  - Needs `onChange` to update the value.
  - React controls it entirely.
  - When using controlled components, always initialize state to non-undefined values for all fields you will bind to value. Otherwise react can triggere warning and program can stop working. 

- **Uncontrolled Input**:
  - Uses `defaultValue` (or no `value` at all).
  - DOM handles it, like regular HTML.

---

### 🧠 React’s Mental Model

React is **declarative**. You say what the UI should be, and React makes it so.

```jsx
<input type="text" value="Hello" />
// Always shows "Hello". Can't be changed by user.
```

```jsx
<input type="text" defaultValue="Hello" />
// User can edit. Starts with "Hello".
```

So when you say `value={1}`, React obeys and **locks** it to `1`.

---

### ✅ Fix It

To make the input editable:
```jsx
const [quantity, setQuantity] = useState(1);

<input
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
/>
```

Or, if you don’t want to manage state:
```jsx
<input type="number" defaultValue={1} />
```

---

### 🧵 Why `e.target.value` is Not Recursive

You might think:

> "`e.target.value` just gives me the old value, right? So the input should stay at 1?"

But that’s not what happens. Here's why:

#### ✅ Step-by-step Flow:

1. You start with:
   ```jsx
   const [quantity, setQuantity] = useState(1);
   ```

2. User types `5` → `onChange` fires:
   ```jsx
   onChange={(e) => setQuantity(e.target.value)}
   ```

3. `e.target.value` is `"5"` (the new typed value, not the old one).

4. `setQuantity("5")` updates state → component re-renders → input now shows `"5"`.

➡️ No recursion. Just controlled input logic.

You can verify by logging:

```jsx
onChange={(e) => {
  console.log("Input value:", e.target.value); // logs new value
  setQuantity(e.target.value);
}}
```

#### ⚠️ Note:
`e.target.value` is always a **string** (even in number inputs).  
Convert if needed:

```jsx
setQuantity(Number(e.target.value))
```

---

### 📌 Summary

- `value={1}` makes input **controlled**.
- Without `onChange`, it's **read-only**.
- Use `defaultValue` or React state to fix it.
- `e.target.value` gives the **new value**(the user most currently typed), not the old — it’s not recursive.