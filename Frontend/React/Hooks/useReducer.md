[`useReducer()` Hook](https://youtu.be/M9O5AjEFzKw?si=9_WijTzExsd3T_n8&t=12345)
 - *****useReducer*** is a hook that is similar to ***useState***, but it is designed for more ***complex state objects*** or ***state transitions*** that involves ***multiple sub-values***. It allows you to manage state in a functional, immutable way.**


***useReducer*** React Hook that is used for state management, especially when:

- The state logic is complex.
- Multiple related state values need to be updated together.
- You want more control than what ***useState*** offers.

It's similar to useState, but instead of directly setting values, you dispatch actions to a reducer function that decides how to update the state.



[If you wanna go more deep down, and want to read about ***useReducer*** more, consider this docs\](https://react.dev/learn/extracting-state-logic-into-a-reducer)


```js
const [state, dispatch] = useReducer(reducer, initialState,()=>initialState);
```

- ***[Syntax explained](https://youtu.be/M9O5AjEFzKw?si=Oi7_8btvUyKCIXfh&t=12377)***
    - `reducer` -> A function that takes state and action, and returns new state.
   - `initialState` -> The initial state value.
   - `dispatch` -> A function to send an action to the reducer.
   - `state` -> The current state value, you can used in your components or anywhere.
   - `initFunction` -> This is called ***lazy initialization***,  and it's React’s way of optimizing expensive state calculations.\
   This is a function that ***initializes the state only ONCE***, when the component is first mounted(***first renders***).
It’s useful when initial state creation is expensive (like reading from localStorage, or computing from props).


Note: 
- keep in mind that action(the object you put in `dispatch` call) types should ideally describe “what the user did” rather than “how you want the state to change”. This makes it easier to later add more features.
-  The reducer should be a pure function—it should only calculate the next state. It should not “do” anything, including displaying messages to the user. That should happen in the event handler. (To help catch mistakes like this, React will call your reducers multiple times in Strict Mode. This is why, if you put an alert in a reducer, it fires twice.)


## 📦 Example 1: Simple Counter
```js
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default Counter;
```

----

📍 How It Works:
1. You define a reducer function that handles different action types.
2. dispatch `({ type: 'increment' })` sends an action.
3. Reducer updates the state accordingly.
4. Component re-renders with new state.


----

## 📦 Example 2: Form with Multiple Fields
```js
import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
};

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  };
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  }

  return (
    <form>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </form>
  );
}

export default Form;
```

----

✅ When to Use ***useReducer*** vs ***useState***
<table>
  <tr>
    <th>useState</th>
    <th>useReducer</th>
  </tr>
  <tr>
    <td>State is simple</td>
    <td>State is complex or deeply nested</td>
  </tr>
  <tr>
    <td> - </td>
    <td>You need centralized state logic</td>
  </tr>
  <tr>
    <td> - </td>
    <td>You need to optimize performance for many updates</td>
  </tr>

</table>


----

# [Learn to Writing concise reducers with Immer, using `useImmerReducer`](https://react.dev/learn/extracting-state-logic-into-a-reducer#writing-concise-reducers-with-immer)

- 📫 Reach me through **[xion.dev7@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=xion.dev7@gmail.com)**
