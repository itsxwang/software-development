[Add event handler to components](https://youtu.be/M9O5AjEFzKw?si=WWcEM1xtZzxss_rL&t=6217)
   - [Oncopy event handler](https://youtu.be/M9O5AjEFzKw?si=O7UX6anjnOkw8Rj3&t=6301)

- **onChange** fires instantly when the value of the input element changes, suitable for validation and show live changes\
In react this syntax is common to use 

```js
const [name, setName] = useState(""); // name is the state

return (
  <input
    type="text"
    value={name} // controlled by state
    onChange={(e) => setName(e.target.value)} // update state on input
  />
);
```