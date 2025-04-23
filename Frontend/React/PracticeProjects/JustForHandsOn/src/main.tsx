import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import Joker from './components/Joker';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'users',
        element: <h2>Users</h2> 
      }
    ]
  },
  {
    path: '/app/',
    element: (
      <div>
        <h2>Welcome to My App</h2>
        <p>This is a dynamic app page.</p>
        <button onClick={() => alert('This is a dynamic button')}>Click Me</button>
      </div>
    )
  
  },
  {
    path: '/app/services',
    element: <h2>Services</h2>
  },
  {
    path: '/about',
    element: <h2>About</h2>
  },
  {
    path: '/contact',
    element: <h2>Contact</h2>
  },
  {
    path: '/joker',
    element: <Joker />
  },
  {
    path: '*',
    element: <h2 style={{ color: 'red', textAlign: 'center' }}>404 Not Found</h2>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
