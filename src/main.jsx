import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { PortfolioProvider } from './contexts/PortfolioContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

