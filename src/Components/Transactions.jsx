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
  
  // function handleNew()
  // {

  // }
  // function handleBack()
  // {
  //   navigate("/transactions")
  // }
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