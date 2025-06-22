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
