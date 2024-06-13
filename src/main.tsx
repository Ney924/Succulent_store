import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App.tsx'
import './index.css'
import './fonts/CeraPro-Bold.ttf'
import './fonts/CeraPro-Medium.ttf'
import './fonts/CeraPro-Regular.ttf'
import './fonts/CeraPro-Light.ttf'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
