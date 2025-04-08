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