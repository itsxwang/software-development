- [Portals in React with example](https://youtu.be/M9O5AjEFzKw?si=zVfcmUstxQD-jLNm&t=9267)

**Portal** is a feature **that allows you to render a child component into a DOM node** that **exist outside the hierarchy of the parent component**. This can be useful for scenarios like modals, tooltips, or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM.Its like a multiportal that allows you to go(render components) anywhere in the dom.

Example

```js
import React from "react";
import { createPortal } from "react-dom";

function App() {
  return createPortal(
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
    </div>,
    document.getElementById("customRoot")
  );
}

export default App;
```
