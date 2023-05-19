import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NoteProvider } from './context/noteContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteProvider>
    <App />
    </NoteProvider>
  </React.StrictMode>,
)
