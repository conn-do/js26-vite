import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WishList from './WishList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WishList />
  </StrictMode>
)
