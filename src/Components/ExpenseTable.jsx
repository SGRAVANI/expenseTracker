/**
 * @component - This component renders expense detail table  which contains information  like expense name,expense amount , expense category and delete record functionality. component will access data from state.expenseDetail global state
 *
 * @returns {ReactNode} A React element that renders Table contains expense information along with delete functionality.
 */



import React, { useEffect, useState } from 'react'
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import "../style.css"
import { deleteDetail } from '../store/slices/expenseDetailsSlice';
import SuccessMessage from './SuccessMessage';
function ExpenseTable() {
let [filterCat,setFilter]=useState("all")
let state=useSelector((state)=>state)
let [isDelete,setDelete]=useState(false)
let dispatch=useDispatch()
useEffect(()=>{
    if(isDelete)
        {
          setTimeout(()=>{
            setDelete(false)
          },[600])
        }
},[isDelete])

/**
 * This function will execute when there will be any change of value in input fileds and store it's updated value to  local state Filter to filter out table rows based on selecetd category of budget
 *
 * @param {Object} evt  -Event Object.
 * @returns {Object} - updates value of local state variable filter
 */


function handleChange(e)
{
   
  console.log(e.target.value)
  setFilter(e.target.value)

//   <RiDeleteBinFill />
}

    /**
 * This function generates rows of table basis on expense data available in global state library and value of  local state variable filter. In every row of table it adds delete functionality to delete record 
 *
 * @returns {ReactNode} Returns a list of <tr> which will be added in <tbody>.
 */

function getRows()
{  let filteredRows=[]
    console.log(state.expenseDetail,filterCat)
    let rowLength=0
   if(filterCat=="all")
    {
    rowLength=state.expenseDetail.length;
    }
  else{
     filteredRows=state.expenseDetail.filter((ele)=>{
        
        if(ele.expenseCategory==filterCat)
            {
           return true
            }
    })
    rowLength=filteredRows.length
  }
let list=[]
if(/*rowLength>0 && */filterCat=="all")
    {
    list=state.expenseDetail.map((ele,index)=>{
       console.log(ele.id)
       return <tr key={`row-${index+1}`}>
            <td >{index+1}</td>
            <td>{ele.expenseName}</td>
            <td>{ele.expenseCategory}</td>
            <td>{ele.expenseAmount}</td>
            <td>{<RiDeleteBinFill  onClick={()=>{handleDelete(ele.id)}} className='delete-btn'/>}</td>
        </tr>
    })
    }
else{
    list=filteredRows.map((ele,index)=>{
        return <tr key={`row-${index+1}`}>
             <td >{index+1}</td>
             <td>{ele.expenseName}</td>
             <td>{ele.expenseCategory}</td>
             <td>{ele.expenseAmount}</td>
             <td>{<RiDeleteBinFill  onClick={()=>{handleDelete(ele.id)}} className='delete-btn'/>}</td>
         </tr>
     })
}
    console.log(list)
return list;
}
function handleDelete(id)
{    setDelete(false)
    console.log("delete clicked")
    let payload={id:id}
    dispatch(deleteDetail(payload))
    setDelete(true)
}
  
    return ( <section className='sections'>
      {
     state.expenseDetail.length>0?(
     
      <section className='my-2 w-100'>
      <h4>Expense Details</h4>
      <div className='table-responsive'>
      <table  className={state.preferences.isDarkMode?"table table-striped table-hover table-dark align-middle":'table table-striped table-hover align-middle'}>
    <thead>
      <tr>
      <th >#</th>
      <th>Transaction</th>
      <th>Category</th>
      <th>Amount</th>
      <th>Action</th>
    
      </tr>
    </thead>
    <tbody>
     {getRows()}
    </tbody>
   </table>
   </div>
   {isDelete &&<div className='my-2'>
      <SuccessMessage message="Expense Record Deleted sucessfully..." />
   </div>}
  
   <div className='d-flex gap-2 my-2  justify-content-start align-items-center  '>
      <div>
      <input type="radio" className="btn-check" id="btn-all" autoComplete="off" name="filters" defaultChecked onChange={handleChange} value="all" />
      <label className="btn btn-outline-success" htmlFor="btn-all">All</label>
       </div>
       <div>
      <input type="radio" className="btn-check" id="btn-food" autoComplete="off" name="filters" onChange={handleChange} value="food"/>
      <label className="btn btn-outline-primary" htmlFor="btn-food">Food</label>
       </div>
       <div>
      <input type="radio" className="btn-check" id="btn-travel" autoComplete="off" name="filters" value="travel" onChange={handleChange}/>
      <label className="btn btn-outline-warning" htmlFor="btn-travel">Travel</label>
       </div>
       <div>
      <input type="radio" className="btn-check" id="btn-utilities" autoComplete="off" name="filters" onChange={handleChange} value="utilities"/>
      <label className="btn btn-outline-info" htmlFor="btn-utilities">Utilities</label>
       </div>
       <div>
      <input type="radio" className="btn-check" id="btn-other" autoComplete="off" name="filters" onChange={handleChange} value="other"/>
      <label className="btn btn-outline-danger" htmlFor="btn-other">Other</label>
       </div>
    
      </div>
    </section>
    ):""
      }
      
      
      
      </section>)
    
    
    
}

export default ExpenseTable