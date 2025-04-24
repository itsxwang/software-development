[In React, you will render lists with some type of loop. The JavaScript `map()` array method is generally the preferred method.](https://youtu.be/M9O5AjEFzKw?si=kMLDkWUEp-pa-Toy&t=2977)

[Understand error: Each child in a list should have a unique `"key"` prop, and know why root element of jsx should have unique key for every items in array(when iterating over an array), like here that root element is `<ul>`](https://youtu.be/lAFbKzO-fss?si=EgSOS7EWqH72cGoA&t=6547)

This error was ocuured because: JSX elements directly inside a map() call always need keys!

```js
const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) => (
<ul key={Math.random()}>
   <li>{number}</li>
</ul>
));
```


- [For know more about keys order read this docs, Keeping list items in order with key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
