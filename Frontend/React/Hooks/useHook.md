# [use Hook](https://youtu.be/zdNF9FJWJ8o?si=mQHWa5Ht_wgCRdKI&t=27)

- [`use` Hook Implementation](https://youtu.be/zdNF9FJWJ8o?si=bn0QoSf991BtMcnt&t=97)


- [Handle loading and error state, using `Suspense` (used to do asyncronous things in react) builtin component](https://youtu.be/zdNF9FJWJ8o?si=FQcltJPBnRFZEqP2&t=177)


But you can only use `use` Hook in server side components. 

For client side components, you can use `useEffect` and `useState` Hook simply to create same functionality


```jsx
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Data />
    </>
  );
}

function Data() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```