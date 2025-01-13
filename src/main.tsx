import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { lime, purple } from '@mui/material/colors'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cat from './pages/Cat'
import Dog from './pages/Dog'
import Index from './pages/Index'
import Mode from './pages/Mode'
import Iko from './pages/Iko'
import Hal from './pages/Hal'
import ModeLayout from './layouts/ModeLayout'
import HalArea from './pages/HalArea'
import SearchResult from './pages/SearchResult'

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
          <Route index element={<Index />} />
          <Route path='cat' element={<Cat />} />
          <Route path='dog' element={<Dog />} />
          <Route path='mode' element={<ModeLayout />}>
            <Route path='mode' element={<Mode />} />
            <Route path='iko' element={<Iko />} />
            <Route path='hal'>
              <Route index element={<Hal />} />
              <Route path=':area' element={<HalArea />} />
            </Route>
          </Route>
          <Route path='result' element={<SearchResult />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
