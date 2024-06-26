/**
 * This component is generating a form to collect expense details from user and store it to central state management library.
 *
 * @returns {ReactNode} A React element that renders a form to collect expense details from user.
 */



import React, { useEffect, useState } from 'react'
import "../style.css"
import PromptBox from './PromptBox'
import { useDispatch, useSelector } from 'react-redux'
import AlertDismissible from './AlertDismissible'
import { addDetail } from '../store/slices/expenseDetailsSlice'
import SuccessMessage from './SuccessMessage'
function NewExpense() {
    let [id,setId]=useState(1)
    let [alert,setAlert]=useState(false)
    let [flag,setFlag]=useState(false)
    let [success,setSuccess]=useState(false)
     let state=useSelector((state)=>state)
     let [data,setData]=useState({personName:state.budget.name})
     let dispatch=useDispatch()
   useEffect(()=>{
    setTimeout(()=>{
    setSuccess(false)
    },900)
   },[success])


/**
 * This function will execute when there will be any change of value in input fileds and store it's updated value to  local state object data
 *
 * @param {Object} evt  -Event Object.
 * @returns {Object} - updates value of local state variable data
 */


     function handleChange(e)
     {
        setData((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
       
     }
     
  /**
 * This function will execute on form sumission event and validate input fileds as well as if inputs are ok then store all fileds value in central state management library using dispatch (upadates state.expenseDetail ). value of newly added record will reflected in budget insight section and expense table section
 *
 * @param {Object} evt  -Event Object i.e. Pointer Event Object.
 * @returns {Object} -updates global states 
 */

     
    function handleSubmit(e)
    {
        e.preventDefault()
        setSuccess(false)
    
    setAlert(false)
    if(data.expenseAmount==""||data.expenseCategory=="" || data.expenseName=="")
        {
            return 
        }
   if(data.expenseAmount<=0)
    {
     setAlert(true)
     return
    }
    if(!data.expenseCategory||data.expenseCategory=="")
        {
            return;
        }
        console.log(data,state.budget)
    if(data.expenseAmount>state.budget.budget ||data.expenseAmount>state.budget[data.expenseCategory])
        {
            console.log("exceed")
            setFlag(true)
            return
        }
        else{
            let recordId=data.expenseCategory+id
        dispatch(addDetail({...data,id:recordId}))
        setId((prev)=>prev+1)
        setSuccess(true)
        }
        e.target.reset();
        //console.log(e)
    }
  return(
    <section className='sections'>
    {/* <h2>Add New Expenses</h2> */}
    <h4>Add New Expense Details</h4>
   {!flag?(   <form onSubmit={handleSubmit} className='w-75'>
  
  {/* <div className='d-flex flex-column align-items-center'> */}
  <div className="row mb-3 ">
  <label htmlFor="expName" className="col-sm-2 col-form-label gap-2 ">Expense Name</label>
  <div className="col-sm-10">
    <input type="text" name="expenseName" id="expName" required placeholder='enter expense item name' onChange={handleChange}  className={state.preferences.isDarkMode?"form-control bg-dark font-dark dark-input":"form-control "} />
  </div>
</div>
<div className="row mb-3 ">
  <label htmlFor="expCategory" className="col-sm-2 col-form-label gap-2 ">Expense Category</label>
  <div className="col-sm-10 ">
    <select name="expenseCategory" id="expCategory" required style={{width:"175px"}} onChange={handleChange} defaultValue={""}  className={state.preferences.isDarkMode?"form-select bg-dark font-dark dark-input w-100":"form-select w-100"}>
    <option value="" disabled >Select Category</option>
          <option value="food" >Food</option>
          <option value="travel">Travel</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
      </select>
  </div>
</div>

<div className="row mb-3 ">
  <label htmlFor="expAmount" className="col-sm-2 col-form-label gap-2 ">Expense Amount</label>
  <div className="col-sm-10">
    <input type="number" name="expenseAmount" id="expAmount" required placeholder='enter expense amount' onChange={handleChange}  className={state.preferences.isDarkMode?"form-control bg-dark font-dark dark-input":"form-control "}/>
  </div>
</div>

      <button type='submit' className='btn btn-secondary'>Add Expense</button>
          {/* </div> */}
      {alert&&<AlertDismissible message='Enter valid expense amount. it must be greater than 0' f={alert} setError={setAlert} variant="danger" />}
      {success && <SuccessMessage message="Data added successfully..." />}
      
  </form>):(<PromptBox category={data.expenseCategory} data={data}  setData={setData} setFlag={setFlag} id={id} setId={setId}/>)} 
    </section>

  )
  
  
}

export default NewExpense