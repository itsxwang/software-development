- [State in React](https://youtu.be/M9O5AjEFzKw?si=L-4wuoLkel01JaMM&t=6465)
    - **State** is a way to store and manage data that can change over time and affects how the component renders. We define state using the ***useState*** **Hook**, which allows you to set an initial value and provides a way to update that state.
- [**useState** Hook allows us to track state in a functional component. **State** generally refers to data or properties that need to be tracking in an application.](https://youtu.be/O6P86uwfdR0?si=HHtaxBx2ELreTGgg&t=227)

    [Syntax explained](https://youtu.be/M9O5AjEFzKw?si=PRRDuFB_0qm3vid-&t=6545)
```js
const [data, chagedata] = useState();
```


A simple Practical example of useState
```js
import { useState } from 'react';
import './index.css'


const App = () => {

  const d = new Date();
  const time = d.toLocaleTimeString(); 
  const [timeNow, updateTime] = useState(time);

  setInterval(() => {
    const d = new Date();
    const time = d.toLocaleTimeString();
    updateTime(time);
  }, 1000);
  

  return <div className="mainT" onClick={function () { console.log('Hello') }}>
      <h1>{timeNow}</h1>
      
    </div>
};

export default App;
```




-----
If you render the same component multiple times, each will get its own state. Click each button separately:

```js
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton /> // Render MyButton component 1
      <MyButton /> // Render MyButton component 2
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count=> (count > 0 ? count+count : count+1 )  );
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

```


The most important is: **React keeps the state values “fixed” within one render’s event handlers**. You don’t need to worry whether the state has changed while the code is running.

And one more thing :
```js
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 2);
        setNumber(number + 1); /* this override 
above statement, because react by default wait for 
all code to run of event handler before updating state, and last 
call it hears is `number + 1` */
      }}>+3</button>
    </>
  )
}
```

[State as a Snapshot(this is the reason of the above code example), in this docs you will learn, state behaves more like a snapshot, setting it does not change the state variable immediately, but **React prepares to change that state in ***next render*****, this docs create lot of things clear, will clear your lot of confusions you can face or facing related to state](https://react.dev/learn/state-as-a-snapshot)

[And one other factor also playes here, **React batches state updates**, ***React waits until all code in the event handlers has run before processing your state updates***. This behaviour is also called batching, read this docs to know about batching](https://react.dev/learn/queueing-a-series-of-state-updates#react-batches-state-updates) 

But Note: **React does not batch across multiple intentional events** like clicks—each click is handled separately. Rest assured that React only does batching when it’s generally safe to do. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.


And one more thing:\
[What happens if you update state after replacing it](https://react.dev/learn/queueing-a-series-of-state-updates#what-happens-if-you-update-state-after-replacing-it)

-----


- [Example of update Array](https://youtu.be/M9O5AjEFzKw?si=4l6GZmrxPC73sOrc&t=6907)
- [Or read this docs, for more detailed explanation, this docs is recommended as it tells you which array methods to use when working with Arrays, how to **remove**, **insert**, **update**, **replace** and all sort of changes of Arrays in state . Alternatively, you can use Immer which lets you use all Array methods](https://react.dev/learn/updating-arrays-in-state)


- [Example of update Object in state](https://youtu.be/M9O5AjEFzKw?si=tJulkfVHU9JZsTiI&t=7177)
- [This docs also tells in great way, how to change objects in state, with other things also, and this docs also tells you about `Immer`, which is module that let you copy object without mutating it(like saving you from `...` syntax, especially helpful if object is deeply neseted), and with immer you can update object like you mutating it, but in actual you will not mutate it, immer make copy of it](https://react.dev/learn/updating-objects-in-state)

- [Example of update Array of Objects in state](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
- [Example of share state with other components(using props)](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
- [Example of share state with other components(using props)](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
- [Example of passing arrow function or normal function to `useState`](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
     - [And it is useful becuase it only calls the function(that you pass in that `useState`) only the very first time your component first renders, unlike hardcoded value/function that runs everytime your component re-renders](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)

 - [One another important thing to note is that `useState` works little bit differently for function and class components, when dealing with objects](https://youtu.be/O6P86uwfdR0?si=oJtb531WortKWAxC&t=677)    

----

1. State is tied to a position in the render tree
2. Same component at the same position preserves state 
3. Different components at the same position reset state(Also, when you render a different component in the same position, it resets the state of its entire subtree)

4. Once component is removed from dom then that component state will also be removed, and if you render the same type of component again, new component with new state will be rendered 

5. As a rule of thumb, **if you want to preserve the state between re-renders, the structure of your tree needs to “match up”** from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.

----
And This is why you **should not nest component function definitions.**

Here, the `MyTextField` component function is defined inside `MyComponent`:
```js
import { useState } from 'react';

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  );
}
```
Every time you click the button, the input state disappears! This is because a different `MyTextField` function is created for every render of `MyComponent`. And this absolutely means you’re rendering a different component in the same position, so React resets all state below. This leads to bugs and performance problems. To avoid this problem, **always declare component functions at the top level, and don’t nest their definitions.** 

----



6. Although, the same component(or we can say same type of component) at the same position(in the render tree) preserves state, [you can still reset state in that situation also](https://react.dev/learn/preserving-and-resetting-state#resetting-state-at-the-same-position)
      - Option 1: Rendering a component in different positions
      - Option 2: Option 2: Resetting state with a key

[Know about this in detail(and more about state) here](https://react.dev/learn/preserving-and-resetting-state)

----

- [Hooks](https://youtu.be/M9O5AjEFzKw?si=U6Y-7LoSVisdDlCo&t=6487)
   - Functions starting with **use** are called ***Hooks***. They are a new addition in React 16.8
They let you use state and other React features without writing a class.Means they allow you to manage your state in a function component
- [Some important rules about Hooks](https://youtu.be/O6P86uwfdR0?si=N5PoI9Sv6L9lo8bl&t=137)

[How `useState` and other hooks work](https://react.dev/learn/state-a-components-memory#how-does-react-know-which-state-to-return)

[Note: **State and other Hooks is isolated and private to each component** Means if `Gallery` a component, and if 2 `Gallery` are rendered, they will have their own state, its like each instance have its own methods and local variables, in this docs you will also see what's the best way other than `state` if you want to sync your all instances of a component](https://react.dev/learn/state-a-components-memory#how-does-react-know-which-state-to-return)
