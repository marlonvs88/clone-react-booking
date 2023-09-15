import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './App.jsx'
import GlobalStyles from './GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <MainApp />
  </React.StrictMode>,
)
