Component: **A component is a piece of the UI that has its own logic and appearance. A component can be as small as a button or as large as an entire page.<br>Components are independent & reusable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML (or jsx to be precise).**

----

Components can be either **functional** or **class-based**.

- ***Functional components***, are simpler and preferred for most use cases as they are JavaScript functions that return React elements based on input props.\
To create a ***functional component***, you define a function that accepts props and returns a React element. For example:
```js
import React from 'react';

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default Welcome;
```

- ***Class components***, on the other hand, are more complex and can manage their own state and lifecycle methods. They extend the `React.Component` class and include a `render()` method that returns HTML.

For ***class components***, you define a class that extends `React.Component`, includes a `render()` method, and may manage state and lifecycle methods. For example:
```js
import React, { Component } from 'react';

class Car extends Component {
  render() {
    return <h1>Car</h1>;
  }
}

export default Car;
```
----
Components can render other components, but you must never nest their definitions:
```js
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
```
The snippet above is very slow and causes bugs. Instead, define every component at the top level:

```js
export default function Gallery() {
  // ...
}

// ✅ Declare components at the top level
function Profile() {
  // ...
}
```


----
**To use a component in your application**(***main.jsx*** file by default), you **import it** and **render it** within the application's ***root element***. For instance:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

---

**React components** are **modular** and **can be composed together** to build complex UIs, ensuring **optimized performance** and **code reusability**

----

[Some rules to keep in mind while working with components and jsx](https://youtu.be/M9O5AjEFzKw?si=hG_kuGZcmdKV6RAn&t=2027)

```
<>
<!-- Your js -->
</>
```
```<> </>``` or ```<React.Fragment></React.Fragment>``` is called to be ***fragment***, when you don't want to enclose you html elements inside any tag(parent).



----

***Component Mounts*** means when component renders the first time.

----

[You can also create component with `React.createElement()`, its how react underneath works when you write ```<></>```, but `React.createElement()` is a old way of creating components](https://youtu.be/lAFbKzO-fss?si=EDmybL5ezHuIFNav&t=2337)