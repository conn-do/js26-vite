import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Teams from './Teams.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Teams />
  </StrictMode>
)
