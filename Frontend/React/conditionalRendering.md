- [Conditional Rendering](https://youtu.be/M9O5AjEFzKw?si=ptesTw9_35BqIiHl&t=4557)
    - Conditional rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences.

## Example:

```jsx
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

-  Like below you can also variables(as we can store jsx easily in variable) instead of ternary operator for better interpretation

```jsx
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```





## Note: Don’t put numbers on the left side of &&.

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

For example, a common mistake is to write code like `messageCount && <p>New messages</p>`. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: `messageCount > 0 && <p>New messages</p>`.
