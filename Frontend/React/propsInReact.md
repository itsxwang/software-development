  - [**_Props/Properties_** in react are arguments passed into React components](https://youtu.be/M9O5AjEFzKw?si=ZWfz6_WmwFqcr4Io&t=3771)

  - **_Arguments passed into react components_** args are called props
  - Props allow us to pass the data from parent component to child component
  - Props are passed to components via HTML attributes

- [Props example](https://youtu.be/M9O5AjEFzKw?si=NSWp5xjLLRRKyjXd&t=3787)

Example code

```js
const App = () => {
  return (
    <div>
      <User name="Alice" age={25} props = {true} />
    </div>
  );
};

const User = (props) => {
  console.log(props) /* {name: 'Alice', age: 25, props: true} */
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
};
```
 
## Another example:
```js
const App = () => {
  return (
    <div>
      <img src = "" alt = ""> //here src and alt 
    </div>
  );
};
```

----

[**But in some situation we wanna pass data from parent component to child component,** through ***closing(pair) tag***, instead of ***self closing tag***, using `props.children`](https://youtu.be/M9O5AjEFzKw?si=9h19In3dwQk2zAFG&t=4447)


-----

We can pass children props to a component by wrapping the child component in a parent component that accepts children props
Example code
```js
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      {props.children} // will put child components here
    </div>
  );
}
const App = () => {
  return (
    <div>
      <User name="Alice" age={25}>
        <h1>Child Component</h1>
      </User>
    </div>
  );
};
```

----
#### Type Check your Props using `PropTypes` package

#### Here is an example of how to use PropTypes in a class component:
```js
import PropTypes from 'prop-types';
import React from 'react';


class Greeting extends React.Component {
  render() {
    return (
      Hello, {this.props.name}
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

/* To ensure a prop is required, you can append `isRequired` to any PropTypes validator:

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
 */

export default Greeting;
```
[To know about `PropTypes` package](https://youtu.be/lAFbKzO-fss?si=MQnzHrBzWRl1ubL7&t=3507)

**To validate props with TypeScript** in React, you can define the props interface and use it to type the component's props. Here's an example of how to do this:

- The difference between validate with TypeScript vs PropTypes package is that PropTypes is used to validate on runtime, but TypeScript is used to validate on compile time only.

-----

```ts
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>Hello, {name}</div>
  );
};
```

[What is `FC`](https://youtu.be/ydkQlJhodio?si=3A9yQbBNKh0f-5Tl&t=247)