import { useEffect } from 'react'
import { useState } from 'react'
function App() {
  // use case for useMemo for reference equality
  const [count,setCount] = useState(0) 
  /* this count not cause useEffect to run when count changes, 
  (cause re-render) */

  const [obj, setObj] = useState(()=> ({ name: 'John', age: 30 }))  /* the new object only created(means new reference only created) when `name` state changes
and therefore prevents below `useEffect` from running when `count` changes(because `count` changes, cause re-render and therefore new object is created 
and means new reference is created(note: this all happens when not using `useMemo`)) 
 (and because `useEffect` depends on object(`myobject`), and object are compare by references instead of values, 
 and therefore so if we not use this `useMemo` it causes below `useEffect` runs every time the component re-renders(because of `count` state changes, new object is created))*/

  useEffect(() => {
    console.log('myobject changed:', obj)
  }
  , [obj]) // only run when myobject changes
  return (
    <div>
      <h1>useMemo Example for reference equality</h1>
      <input type="text" value={obj.name} onChange={(e) => setObj(prevobj=> ({ ...prevobj, name: e.target.value }))} />
      
      <p>Current name: {obj.name}</p>
      <button onClick={() => setObj({ name: 'John', age: 30 })}>Reset Name</button>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
  
}

export default App