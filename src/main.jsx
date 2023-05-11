import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StyledEngineProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
