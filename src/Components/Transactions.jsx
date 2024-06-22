/**
 * This component contins various sections like BudgetInsight, AddNewExpense and ExpenseTable.
 *
 * @returns {ReactNode} A React element that renders various sections based on budget entered by user and it's details.
 */



import React, { useEffect } from 'react'

import LandingPage from './LandingPage'
import NewExpense from './NewExpense'
import { useSelector } from 'react-redux'

import ExpenseTable from './ExpenseTable'

import { useDispatch } from 'react-redux'

import Header from './Header'
import BudgetInsight from './BudgetInsight'
function Transactions() {

  let state=useSelector((state)=>state)
  let dispatch=useDispatch()
  
 
  useEffect(()=>{
    document.body.backgroundColor=""
  document.body.style.backgroundColor=(state.preferences.isDarkMode)?"rgb(66,66,66)":"white"
  },[state.preferences])
  
  return (
    <div   className={state.preferences.isDarkMode?"font-dark":"font-light"}>
    <Header/>
    <div className='container  '>
    
    <BudgetInsight/>
   
   <NewExpense/>
   <ExpenseTable/>
   
    </div>
    </div>
  )
}

export default Transactions