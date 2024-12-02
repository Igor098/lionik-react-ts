import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import './styles/fonts.scss'
import './index.scss'
import App from './components/App/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
