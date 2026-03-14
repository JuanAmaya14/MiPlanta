import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Foot from './components/Foot.jsx'

createRoot(document.getElementById('head')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('foot')).render(
  <StrictMode>
    <Foot />
  </StrictMode>,
)
