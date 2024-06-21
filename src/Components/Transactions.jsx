import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPage from './LandingPage'
import NewExpense from './NewExpense'
import { useSelector } from 'react-redux'
import Pill from './Pill'
import ExpenseTable from './ExpenseTable'
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { toggleDarkMode } from '../store/slices/preferenceSlice'
function Transactions() {
  let navigate=useNavigate()
  let state=useSelector((state)=>state)
  let dispatch=useDispatch()
  function handleUpdate()
  {
  navigate("/")
  }
  function handleNew()
  {

  }
  function handleBack()
  {
    navigate("/transactions")
  }
  useEffect(()=>{
  document.body.style.backgroundColor=(state.preferences.isDarkMode)?"rgb(66,66,66)":"white"
  },[state.preferences])
  function getInsightRows()
  {
    
    
     let o={}
     let all=0
     for(let ele of state.expenseDetail)
      {
        console.log(ele,"ele")
        o[ele.expenseCategory]=o[ele.expenseCategory]?Number(o[ele.expenseCategory])+Number(ele.expenseAmount):Number(ele.expenseAmount);
        all+=Number(ele.expenseAmount)
      }
      o={...o,all}
      console.log(o)
      let rows=[]
      for(let key in o)
        {
          let localOb={category:key,limitStatus:(()=>{
            if(key=="all" )
              {
                if( o[key]>state.budget.budget)
                  {
               return "exceeded"
                  }
                  else{
                    return "within"
                  }
              }
            else if(/*o[key]>state.budget.budget||*/o[key]>state.budget[key]){return "exceeded"}
        else{
          return "within"
        }})(),budget:key=="all"?state.budget.budget:state.budget[key],expense:o[key],balance:key=="all"?Number(state.budget.budget)-o[key]:state.budget[key]-o[key]}
          rows.push(<tr key={`cat-${key}`}>
            <td>{localOb.category}</td>
            <td><Pill content={localOb.limitStatus}/></td>
            <td>{localOb.budget}</td>
            <td>{localOb.expense}</td>
            <td>{localOb.balance}</td>
          </tr>)
        }
        console.log(rows)
    return rows;
  
  }

  return (
    <div   className={state.preferences.isDarkMode?"font-dark":"font-light"}>
    <header className={state.preferences.isDarkMode?"header header-dark font-dark":"header header-light font-light"}>
      <div className='d-flex w-100 justify-content-between align-items-center'  >
        <h3  className='user-info'>{state.budget.name}'s Expense Tracker</h3>
        <div className='d-flex justify-content-end gap-3 align-items-center'  >
        
        <button onClick={handleUpdate} className='btn btn-secondary btn-sm d-md-block flex-shrink-1'  >New/Update Budget</button>
        <div style={{fontSize:"1.5rem"}} onClick={()=>{
                dispatch(toggleDarkMode())
            }}>{state.preferences.isDarkMode?<FaSun style={{color:"white"}}/>:<FaMoon style={{color:"navy"}}/>}</div>

        </div>
        {/* <div className='d-flex gap-2' style={{marginBottom:"1.5rem"}}>
        <button onClick={handleUpdate} className='btn btn-warning'>Update Budget</button>
        <button onClick={handleNew} className='btn btn-success'>New Tracker</button>
        <button onClick={handleBack} className='btn btn-primary'>GoBack</button>
        </div> */}
        
      </div>
    </header>
    <div className='container  '>
    <section className='sections'>
      <h4>Budget Insights</h4>
      <div className='table-responsive w-100'>
   <table className={state.preferences.isDarkMode?"table table-sm table-striped table-hover table-dark align-middle":'table table-sm table-striped table-hover align-middle'}>
    
    <thead>
      <tr>
      <th>Category</th>
      <th>Limit Status</th>
      <th>Budget</th>
      <th>Expense</th>
      <th>Balance</th>
      </tr>
    </thead>
    <tbody>
     {getInsightRows()}
    </tbody>
   </table>
   </div>
    </section>
    <section className='sections'>
      {/* <h2>Add New Expenses</h2> */}
      <h4>Add New Expense Details</h4>
      <NewExpense/>
    </section>
   
   <section className='sections'>
    {/* <!--expense table section --> */}
    <ExpenseTable/>
    </section>
    </div>
    </div>
  )
}

export default Transactions