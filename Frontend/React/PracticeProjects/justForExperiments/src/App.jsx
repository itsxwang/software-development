import React, { Suspense } from 'react';

const Profile = React.lazy(() => import('./Profile'));


export default function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Suspense fallback={<p>⏳ Loading profile...</p>}>
        <Profile />
      </Suspense>

    </div>
  );
}
