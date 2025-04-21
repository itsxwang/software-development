[useMemo explain and example usecases(two explained in the video)](https://youtu.be/THL1OPn72vo?si=W5tZVdGjmITIXfAt)
- `useMemo` is used for memoization **which is the idea of caching a value so you don't have to recompute it every single time(when your component re-renders)** 
[But why not memoize everything?](https://youtu.be/THL1OPn72vo?si=IYwnCKgSMPUqzhOq&t=337)

```jsx
import { useMemo,useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState('even')
/* so we have two states here, `count` and `toggle`, 
and we want to double the count value and display it in the UI. 
But we don't want to recompute the doubled value every time the component re-renders.
So we can use `useMemo` to memoize the doubled value.
This helps improve performance by avoiding unnecessary calculations
(on re-renders because of state changes(here `toggle`)).

*/
// count dependency is added here to recompute doubledCount whenever count changes.
  const doubledCount =  useMemo(() => double(count), [count]) /


  return (
    <div>
      <h1>Hello, World! {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count -1)}>Decrement</button>
      <div>Double {doubledCount}</div>
      <div>{toggle}</div>
      <button onClick={() => setToggle(toggle === 'even' ? 'odd' : 'even')}>Toogle</button>
    </div>
  )
}

const double  = (c) => {
  for (let i = 0; i < 1000000000; i++) {i} 
  return c * 2
}

export default App
```

- [Second example of `useMemo` for reference equality](https://youtu.be/THL1OPn72vo?si=CWpdKY9o6znGsc05&t=397)

This Example:
```tsx
import { useEffect } from 'react'
import { useMemo,useState } from 'react'
function App() {
  // use case for useMemo for reference equality
  const [name,setName] = useState('John')
  const [count,setCount] = useState(0) 
  /* this count not cause useEffect to run when count changes, 
  (cause re-render) */

  const myobject: { name: string; age: number } = useMemo(() => {
    return { name: name, age: 30 }
  }, [name])  /* the new object only created(means new reference only created) when `name` state changes
and therefore prevents below `useEffect` from running when `count` changes
(because `count` changes, cause re-render and therefore new object is created 
and means new reference is created(note: this all happens when not using `useMemo`)) 
 (and because `useEffect` depends on object(`myobject`), and object are compare by references instead of values, 
 and therefore so if we not use this `useMemo` it causes below `useEffect` runs every time the component 
re-renders(because of `count` state changes, new object(refernce) is created,
new `myObject` reference not equal to previous `myobject` reference, and therefore `useEffect` runs 
))
*/

  useEffect(() => {
    console.log('myobject changed:', myobject)
  }
  , [myobject]) // only run when myobject changes
  return (
    <div>
      <h1>useMemo Example for reference equality</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      
      <p>Current name: {name}</p>
      <button onClick={() => setName('John')}>Reset Name</button>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
  
}

export default App
```


And yeah you can do same thing with `useState` so don't think its `useMemo` specific, but `useMemo` is more readable and clear in this case.

Example of `useState` for reference equality(same thing we did above with `useMemo`): 
```tsx
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
```