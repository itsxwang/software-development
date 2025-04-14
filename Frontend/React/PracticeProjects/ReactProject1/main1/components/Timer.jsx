import React from 'react'
import { useRef,useEffect, useState } from 'react'

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();
useEffect(() => {
  console.log('setting interval');
  intervalRef.current = setInterval(() => {
    setTime((time) => time + 1);
  }, 1000);

  return () => {
    console.log('clearing interval');
    clearInterval(intervalRef.current);
  };
})

  return (
    <div>
        <h1>{time}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  )
}

export default Timer