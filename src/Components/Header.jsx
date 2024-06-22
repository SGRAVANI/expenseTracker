import React from 'react'
import "../style.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { toggleDarkMode } from '../store/slices/preferenceSlice'
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
function Header() {
    let dispatch=useDispatch()
let state=useSelector((state)=>state)
let navigate=useNavigate()
function handleUpdate()
  {
  navigate("/")
  }
  return (
    <header className={state.preferences.isDarkMode?"header header-dark font-dark":"header header-light font-light"}>
    <div className='d-flex w-100 justify-content-between align-items-center'  >
      <h3  className='user-info'>{state.budget.name}'s Expense Tracker</h3>
      <div className='d-flex justify-content-end gap-3 align-items-center'  >
      
      <button onClick={handleUpdate} className='btn btn-secondary btn-sm d-md-block flex-shrink-1'  >New/Update Budget</button>
      <div style={{fontSize:"1.5rem"}} onClick={()=>{
              dispatch(toggleDarkMode())
          }}>{state.preferences.isDarkMode?<FaSun style={{color:"white"}}/>:<FaMoon style={{color:"navy"}}/>}</div>
    
      </div>
      
    </div>
    </header>
  )
}

export default Header