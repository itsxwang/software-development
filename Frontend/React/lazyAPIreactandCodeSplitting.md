

- [Code Splitting in react](https://youtu.be/IBrmsyy9R94?si=4A-wKHgd7MRpBgwf)
    - What is Code Splitting? : Code Splitting is a technique in which we divide our code into multiple chunks and load them on demand. Its a feature supported by bundlers like Vite, WebPack, Rollup, and Browesify. (Bundlers are tools that help us to bundle our code into a single file) .

And [lazy](https://react.dev/reference/react/lazy) lets you defer loading component’s code until it is rendered for the first time. Basically helps us to load the component(import) on specific condition.

Code splitting your app help you "lazy-load" just the things that currently needed by thy user.


Call `lazy` outside your components to declare a lazy-loaded (or you can also do inside) React component:
```jsx
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

- [How to add error boundary, when loading fails](https://youtu.be/IBrmsyy9R94?si=IlydsY1q-T5LvwM1&t=397)

## Full Example(error boundary included):

- App.jsx
```jsx
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Profile = lazy(() => import('./Profile'));
export default function App() {
  console.log("App");
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary fallbackRender={Errorfallback} onReset={() => {console.log("reset")}} >
        <Suspense fallback={<p>Loading profile...</p>}>
          <Profile />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const Errorfallback = ({ error, resetErrorBoundary }) => {
  return <p>
    Something went wrongxx: {error.message} 
    <button onClick={resetErrorBoundary}>Try again</button>
  </p>;

};
```


- Profile.jsx


```jsx
// Simulate a 2-second loading delay
function wait(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}

function Profile() {
  // produce error
  
  wait(2000); // This blocks for 2 seconds (not good in real apps, but fine for demo)
  return (
    <div>
      <h2>Profile Component</h2>
      <p>This content appeared after 2 seconds!</p>
    </div>
  );
}

export default Profile;

throw new Error('Something went wrong.');

```

---

## [Route Based Code Splitting](https://youtu.be/IBrmsyy9R94?si=aVokGckAXuGeP50k&t=717)

- With the help of Route-Based Routing, we can split our code into multiple chunks based on the route. Means whole js code of all files will not load at once, rather they will load when we visit that particular route.


