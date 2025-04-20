// Import necessary hooks from React
import { useEffect, useState, useRef } from 'react';

// Main App component
const App = () => {
  // State to store the interval callback function
  const [callback, setCallback] = useState(() => () => console.log('Initial callback'));

  // State to store the interval delay (in milliseconds)
  const [delay, setDelay] = useState(1000);

  // State to toggle visibility of NewComp
  const [showNewComp, setShowNewComp] = useState(true);

  return (
    <div>
      {/* Conditionally render NewComp and pass callback & delay as props */}
      {showNewComp && <NewComp callback={callback} delay={delay} />}

      {/* Toggle button to show/hide NewComp */}
      <button onClick={() => setShowNewComp(!showNewComp)}>Toggle NewComp</button>

      {/* Button to change the callback function */}
      <button onClick={() => setCallback(() => () => console.log('New callback'))}>
        Change Callback
      </button>

      {/* Input to dynamically change the delay */}
      <input
        type="number"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        placeholder="Set delay in ms"
      />
      

      <h1>App Component</h1>
      <h2>Current Delay: {delay} ms</h2>
    </div>
  );
};

// NewComp receives `callback` and `delay` as props
const NewComp = ({ callback, delay }: { callback: () => void; delay: number }) => {
  // Custom hook to handle intervals properly in React
  const useInterval = (callback: () => void, delay: number ) => {
    const savedCallback = useRef<() => void | null>(null);

    // Store the latest callback to avoid stale closures 
    useEffect(() => {
      console.log('Setting up interval');
      savedCallback.current = callback;
      console.log(savedCallback.current)
    }, [callback]);

    // Set up the interval with the given delay
    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current(); // Always call the latest callback
        }
      }

        const id = setInterval(tick, delay); // Start interval
        return () => clearInterval(id);      // Cleanup on unmount or delay change
    }, [delay]);
  };

  // Use the custom interval hook
  useInterval(callback, delay);

  return (
    <div>
      <h1>New Component</h1>
    </div>
  );
};

export default App;