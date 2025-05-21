import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Canvas from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas />
  </StrictMode>,
)
