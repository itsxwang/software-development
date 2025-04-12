[`useEffect` hook](https://youtu.be/M9O5AjEFzKw?si=uyCqLtMNaJOehDaE&t=9931)
- ***useEffect*** Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM etc.
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
