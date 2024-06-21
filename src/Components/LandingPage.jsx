import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style.css"
import { useDispatch,useSelector } from 'react-redux'
import { addBudget,updateBudget } from '../store/slices/budgetSlice'
import { toggleDarkMode } from '../store/slices/preferenceSlice'
import AlertDismissible from './AlertDismissible'
import expenseImg from "../assets/page1-expense-img.jpg"
//import AlertCompo from './AlertCompo.jsx'
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
function LandingPage() {
let navigate=useNavigate()
let [error,setError]=useState({f:false,msg:"",variant:""})
//let userData=useState({name:"",budget:"",food:"",other:"",travel:"",utilities:""})
let [inputData,setInputData]=useState({
    name:"",budget:"",food:"",other:"",travel:"",utilities:""
})

let dispatch=useDispatch()
let state=useSelector((state)=>state)
//let preferenceSelector=useSelector((state)=>state.preferences)
function computeOther()
{
    let total=inputData.budget-getTotal();
    console.log(total)
    return total
}
function generateAlert(text,f,variant)
{
   // console.log("inside fn")
  // console.log("generate alert called",f)
    return <AlertDismissible message={text} f={f} variant={variant} setError={setError}/>
}
function getTotal()
{
    let total=inputData.food+inputData.travel+inputData.utilities;
    console.log("total is :",total)
    return total
}


useEffect(() => {
    // Reset input data when navigating back to the page
    setInputData({
      name: state.budget.name || "",
      budget: state.budget.budget || "",
      food: state.budget.food || "",
      other: state.budget.other || "",
      travel: state.budget.travel || "",
      utilities: state.budget.utilities || ""
    });
  }, [state.budget]);
function handleSubmit(e)
{
       
    e.preventDefault()
    setError((prev)=>{
     //   console.log(prev)
        return {...prev,f:false,msg:""}})
    console.log(inputData)
   if(!inputData.budget||inputData.budget==0 )
    {    console.log(error.f)
        setError((prev)=>{
            console.log(prev)
            return {...prev,f:true,msg:"Budget must be greater than 0 !!!",variant:"danger"}})
          
        return;
    }
    let total=getTotal()
    if(total>inputData.budget)
        {
            
            setError((prev)=>{
                console.log(prev)
                return {...prev,f:true,msg:"Budget must be greater Total expenses. Please update your budget amount!!!",variant:"danger"}})
        
            return;
        }
    console.log("value of state is ",state)
   dispatch(addBudget({...inputData,other:computeOther()}))
   console.log("value of state is ",state)
    navigate("/transactions")
}
function handleChange(e)
{
setInputData({...inputData,[e.target.name]:(()=>{
    console.log(isNaN(e.target.value),e.target.value)
    return isNaN(Number(e.target.value))?e.target.value:Number(e.target.value)})()})
//dispatch(updateBudget({[e.target.name]:e.target.value}))
}
function handleUpdate()
  {
  navigate("/")
  }
  function handleNew()
  {
   dispatch(addBudget({
    name:"",budget:"",food:"",other:"",travel:"",utilities:""}))
  }
  function handleBack()
  {
    navigate("/transactions")
  }

  return (
    <div className={state.preferences.isDarkMode?"body body-color-dark font-dark":"body body-color-light"}>
    <div className='container-fluid'>
        {/* <div className='inner'> */}
            <div style={{position:"absolute",right:"1rem",top:"1rem",fontSize:"1.5rem"}} onClick={()=>{
                dispatch(toggleDarkMode())
            }}>{state.preferences.isDarkMode?<FaSun style={{color:"white"}}/>:<FaMoon style={{color:"navy"}}/>}</div>
            <h1 className='display-sm-3 fw-bold py-4'>Your Personalized Expense Tracker</h1>
        <div  className='row ' >
        <div className='col-sm-6 col-md-7 col-12 px-2 d-flex align-items-center justify-content-center' >{<img src={expenseImg} className='img-fluid object-fit-cover rounded' />}</div>
       
        
        <form  onSubmit={handleSubmit} className='col-md-5 col-sm-6 py-3 col-12'>
        <div className="row mb-3 ">
    <label htmlFor="name" className="col-sm-2 col-form-label gap-2 ">Name</label>
    <div className="col-sm-10">
      <input type="text" placeholder='enter your name' name="name"required value={inputData.name}  /*value={state.name}*/ onChange={handleChange} className={state.preferences.isDarkMode?"form-control font-dark bg-dark":"form-control"} id="name"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="budget" className="col-sm-2 col-form-label">Total Budget (in Rs.)</label>
    <div className="col-sm-10">
      <input type="number" placeholder='enter your budget(Rs)' required name="budget" value={inputData.budget} 
               /* value={state.budget} */
                onChange={handleChange}
id="budget"   className={state.preferences.isDarkMode?"form-control font-dark bg-dark":"form-control"}/>
    </div>
  </div>
  
  <fieldset className="border p-2">
   <legend  className="w-auto">Enter Budget Details</legend>



   <div className="row mb-3">
    <label htmlFor="food" className="col-sm-2 col-form-label">Food</label>
    <div className="col-sm-10">
      <input type="number" placeholder='enter food budget' required name="food" value={inputData.food} 
               /* value={state.budget} */
                onChange={handleChange}
                className={state.preferences.isDarkMode?"form-control font-dark bg-dark":"form-control"} id="food"/>
    </div>
  </div>
 

  <div className="row mb-3">
    <label htmlFor="travel" className="col-sm-2 col-form-label">Travel</label>
    <div className="col-sm-10">
      <input type="number" id="travel"placeholder='enter travel budget' required name="travel" value={inputData.travel} /*value={state.travel}*/  onChange={handleChange}
className={state.preferences.isDarkMode?"form-control font-dark bg-dark":"form-control"}/>
    </div>
  </div>
 


  <div className="row mb-3">
    <label htmlFor="util" className="col-sm-2 col-form-label">Utilities</label>
    <div className="col-sm-10">
      <input type="number" id="util" placeholder='enter utilities budget'required name="utilities" value={inputData.utilities} /*value={state.utilities}*/  onChange={handleChange} 
className={state.preferences.isDarkMode?"form-control font-dark bg-dark":"form-control"} />
    </div>
  </div>
 


  <div className="row mb-3">
    <label htmlFor="other" className="col-sm-2 col-form-label">Other</label>
    <div className="col-sm-10">
      <input type="text" id="other" placeholder='enter miscelleneous budget' name="other" value={computeOther()} disabled
className={state.preferences.isDarkMode?"form-control font-dark bg-dark":"form-control"}/>
    </div>
  </div>
 





</fieldset>

                        {state.budget.name==""?<button type='submit'  className={state.preferences.isDarkMode?"btn-custom btn-custom-dark mt-3":"btn-custom btn-custom-light mt-3 "}>Submit</button>:<div className='d-flex gap-2 mt-3' style={{marginBottom:"1.5rem"}}>
        <button onClick={handleUpdate} className='btn btn-warning'>Update Budget</button>
        <button onClick={handleNew} className='btn btn-success'>New Tracker</button>
        <button onClick={handleBack} className='btn btn-secondary'>GoBack</button>
        </div>
        }
         <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
        {error.f?generateAlert(error.msg,error.f,error.variant):""}
        </div>
        </form>
        
        </div>
        
       
     </div>
     </div>
    //  </div>
  )
}

export default LandingPage