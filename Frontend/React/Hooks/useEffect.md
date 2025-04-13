[`useEffect` hook](https://youtu.be/M9O5AjEFzKw?si=uyCqLtMNaJOehDaE&t=9931)
- ***useEffect*** Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM etc.

Note: The ***useEffect*** hook's callback function executes after the component has rendered and the browser has painted the updated UI to the screen. This means that any code inside useEffect runs post-render, not during the render phase.

### 🧠 Understanding useEffect Execution Timing

When a component's state or props change, React follows this sequence:

1. **Render Phase**: React calculates the new UI based on the updated state or props.
2. **Commit Phase**: React applies the changes to the DOM.
3. **Browser Paint**: The browser updates the screen to reflect the changes.
4. **useEffect Execution**: After the paint, React runs the functions inside `useEffect`.

This deferred execution ensures that side effects, such as data fetching or subscriptions, do not block the rendering process, leading to smoother UI updates.




```js
useEffect(
    () => {
        // update the document title using the browser API
        document.title = `You clicked ${count} times`;
    },
    // add count as a second argument
    [count] // dependency array
)
```

[Important things when working with `useEffect`](https://youtu.be/M9O5AjEFzKw?si=QDZwT5l5OmixE2PR&t=9971)

[Example of `useEffect`](https://youtu.be/M9O5AjEFzKw?si=aOEJMywWOYehdmpQ&t=10047)

[Fetch data using useEffect](https://youtu.be/M9O5AjEFzKw?si=bn4UHz9s16pAOe8g&t=10501)
