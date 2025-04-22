import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import Joker from './components/Joker';

const router = createBrowserRouter([
  { path: '/', element: <App />,
    children: [
      {
        path:'users',
        element: <h2>Users</h2>
      }
    ]
   },
  { path: '/app/', element: <h2>App</h2> },
  { path: '/app/services', element: <h2>Services</h2> },
  { path: '/about', element: <h2>About</h2> },
  { path: '/contact', element: <h2>Contact</h2> },
  { path: '/joker', element: <Joker /> },
  { path: '*', element: <h2 style={{ color: 'red', textAlign: 'center' }}>404 Not Found</h2> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
)
