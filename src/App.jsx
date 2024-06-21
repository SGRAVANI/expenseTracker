import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Transactions from './Components/Transactions.jsx'
function App() {
 
  return (
    <>
    <BrowserRouter>
   
      {/* <button className='btn btn-primary'>Send</button> */}
      {/* <LandingPage/> */}
    
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/transactions" element={<Transactions/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
