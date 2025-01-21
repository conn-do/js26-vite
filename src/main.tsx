import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WishList from './WishList.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { lime, purple } from '@mui/material/colors'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Cat, Dog } from './Animal.tsx'
import Mode from './pages/Mode.tsx'
import Iko from './pages/Iko.tsx'
import Hal from './pages/Hal.tsx'
import ModeLayout from './layouts/ModeLayout.tsx'
import TopPage from './pages/TopPage.tsx'
import HalArea from './pages/HalArea.tsx'
import Ajax from './pages/Ajax.tsx'

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path='cat' element={<Cat />} />
          <Route path='dog' element={<Dog />} />
          <Route path='mode' element={<ModeLayout />}>
            <Route path='mode' element={<Mode />} />
            <Route path='iko' element={<Iko />} />
            <Route path='hal'>
              <Route path=':area' element={<HalArea />} />
            </Route>
          </Route>
          <Route path='ajax' element={<Ajax />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
