import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './pages/Landing/NavBar.jsx'
import LandingHeader from './pages/Landing/LandingHeader.jsx'
{/*import FontAwesomeIcon from './pages/Landing/fontawesome.jsx'*/}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <LandingHeader />
    
  </React.StrictMode>,
)
