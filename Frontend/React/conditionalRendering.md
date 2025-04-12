- [Conditional Rendering](https://youtu.be/M9O5AjEFzKw?si=ptesTw9_35BqIiHl&t=4557)
    - Conditional rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences.

## Example:

```js
  './App.jsx'
  import { Password } from './Password';
  const App = () => {
    return <Password isValid={true} />;
  };


  './Password.jsx'
const ValidPassword = () => <h1>Valid Password</h1>;

const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};


```