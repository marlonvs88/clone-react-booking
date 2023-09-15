import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './GlobalStyles.js'
import Home from './Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <Home />
  </React.StrictMode>,
)
