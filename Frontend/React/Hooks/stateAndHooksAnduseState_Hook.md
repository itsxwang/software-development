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

-----


- [Example of update Array](https://youtu.be/M9O5AjEFzKw?si=4l6GZmrxPC73sOrc&t=6907)
- [Example of update Object](https://youtu.be/M9O5AjEFzKw?si=tJulkfVHU9JZsTiI&t=7177)
- [Example of update Array of Objects](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
- [Example of share state with other components(using props)](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
- [Example of share state with other components(using props)](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
- [Example of passing arrow function or normal function to `useState`](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)
     - [And it is useful becuase it only calls the function(that you pass in that `useState`) only the very first time your component first renders, unlike hardcoded value/function that runs everytime your component re-renders](https://youtu.be/M9O5AjEFzKw?si=_fmLDdyGeUJ-tGFB&t=7357)

 - [One another important thing to note is that `useState` works little bit differently for function and class components, when dealing with objects](https://youtu.be/O6P86uwfdR0?si=oJtb531WortKWAxC&t=677)    
----

- [Hooks](https://youtu.be/M9O5AjEFzKw?si=U6Y-7LoSVisdDlCo&t=6487)
   - Functions starting with **use** are called ***Hooks***. They are a new addition in React 16.8
They let you use state and other React features without writing a class.Means they allow you to manage your state in a function component
- [Some important rules about Hooks](https://youtu.be/O6P86uwfdR0?si=N5PoI9Sv6L9lo8bl&t=137)