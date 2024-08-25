import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todo from './todo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo/>
  </StrictMode>,
)
