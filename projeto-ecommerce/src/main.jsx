import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes/router.jsx' // Importando o arquivo que criamos acima

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>
)