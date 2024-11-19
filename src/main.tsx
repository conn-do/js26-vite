import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cat from './Cat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cat />
  </StrictMode>
)
