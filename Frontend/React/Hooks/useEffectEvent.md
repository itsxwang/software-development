
**Effect Events** are non-reactive “pieces” of your Effect code.
The `useEffectEvent` hook is an experimental feature in React, designed to simplify handling side effects that involve event-like behavior within functional components. It allows you to define functions that always have access to the latest state and props without needing to include them in the dependency array of a `useEffect`. This helps prevent issues related to stale closures and reduces the need to suppress linter warnings.




- [Here is a tutorial](https://youtu.be/NZJUEzn10FI)

- [Here is a docs written with examples](https://react.dev/learn/separating-events-from-effects#extracting-non-reactive-logic-out-of-effects)

-   Like this for example: 

```js
import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(1000);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      onTick();
    }, delay);
    return () => clearInterval(intervalId);
  }, [delay, onTick]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIncrement((i) => i + 1)}>Increase Increment</button>
      <button onClick={() => setIncrement((i) => i - 1)}>Decrease Increment</button>
      <button onClick={() => setDelay((d) => d + 500)}>Increase Delay</button>
      <button onClick={() => setDelay((d) => d - 500)}>Decrease Delay</button>
    </div>
  );
}
```

In this example, onTick is defined using `useEffectEvent`, ensuring it always has access to the latest value of increment without needing to include `increment` in the dependency array of the `useEffect` hook. This prevents the need to recreate the interval whenever increment changes, leading to more efficient and predictable behavior.

