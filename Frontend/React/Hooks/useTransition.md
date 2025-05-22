# [`useTransition` Hook](https://youtu.be/N5R6NL3UE7I?si=0kthliWxspb8AfGB)


The `useTransition` hook allows developers to mark certain state updates as non-urgent. This enables React to prioritize more critical updates, ensuring smoother and more responsive user interfaces, especially during complex or time-consuming operations.

## 🔍 What is `useTransition`?

`useTransition` is a React Hook that returns a pair:

1. `isPending`: A boolean indicating whether a transition is ongoing, means low priority state update still going on.

2. `startTransition`: A function to wrap state updates that can be deferred(to delay the execution of).

By wrapping non-urgent updates within `startTransition`, React can interrupt these updates if more urgent ones (like user inputs) occur, enhancing the app's responsiveness.



## ⚙️ Syntax
```jsx
const [isPending, startTransition] = useTransition();
```



## 🧠 How It Work

When you invoke `startTransition`, you're signaling to React that the enclosed updates are of lower priority. React will then schedule these updates in a way that doesn't block more critical interactions. For instance, if a user types into an input field while a transition is ongoing, React can prioritize updating the input field over completing the transition.

It's important to note that updates inside `startTransition` can be interrupted and restarted, ensuring that the UI remains responsive. However, certain updates, like those to controlled input fields, should not be placed inside `startTransition` as they require immediate feedback. 

## 💡 Practical Example

Consider a scenario where typing into a search input filters a large list of items. Without useTransition, the UI might lag due to the heavy computation.

```jsx
import { useState, useTransition } from "react";

function SearchComponent({ items }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.split(/\s+/).join("").toLowerCase().includes(value.split(/\s+/).join("").toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(`Item ${i}`);
  }
  return <SearchComponent items={items} />;
}
```

So basically here we are using `useTransition` to mark the list state update(`setFilteredItems`) to be non-urgent, which means it will be executed in a way that doesn't block more critical interactions(user inputs, `setInputValue`).