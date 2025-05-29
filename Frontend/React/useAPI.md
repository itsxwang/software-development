[use](https://react.dev/reference/react/use) is a React API that lets you read the value of a resource like a Promise or context.

- Note: Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.

---

Conside making a promise in server side components and then use it in client components, so promise not created every time the component re-renders . [In this way you can](https://react.dev/reference/react/use#streaming-data-from-server-to-client) . 

---

If the data source is promise, this can be happens:

- If thrown promise, resolve, React will render the component
- If thrown promise, pending, the fallback UI will be shown
- If thrown promise, reject, React will bubble up to closest `ErrorBoundary` 

[Example](https://react.dev/reference/react/use#dealing-with-rejected-promises)

---
And if you make promise on client side component this happens:

### Button.jsx
```jsx
import React from 'react'
import { use } from 'react'
function Button() {
    const data = use(fetch("https://jsonplaceholder.typicode.com/todos/1").then(res =>{console.log('goes on...') ;return res.json()}))
  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}

export default Button
```

***/*\* here's what happens,  `Suspense` component render fallback when promise pending, after promise resolve suspense renders the component again, and same cycles goes on  *\*/***

### App.jsx

```jsx
import React, { Suspense } from 'react';

import Button from './Button';

export default function App() {
  return (
    <div>
      <Button/>
    </div>
  );
}
```
