/**
 * @component
 * This component renders Prompt window when expense amount eneted by user is greater than budget of selecetd category by user and will take input from user whether user want to continue with expense or not.
 *@params {Object-prop}-{data,setData,category,setFlag,setId,id} 
 data-expense Details {expenseName,expenseAmount}
 setData-update expense data/submit expense data
 category-expense category selecetd by user
 id-  state id to store expensedetail record
 setId- id state updation function 
 * @returns {ReactNode} A React element that renders when expense exceed than category limit and either cancel expense detail or submit it based on user action.
 */



import React from 'react'
import "../style.css"
import { useDispatch, useSelector } from 'react-redux'
import { addDetail } from '../store/slices/expenseDetailsSlice'
function PromptBox({data,setData,category,setFlag,setId,id}) {
    
    let dispatch=useDispatch() 
   
    /**
 * This function will execute when user click on Ok button. global state state.expenseDetail will be updated using prop data with some additional fileds like id
 *
  * @returns {Object} -updates global states 
 */

 
   
   
    function handleAdd()
    {
        //setId((prev)=>prev+1)
        console.log(data,"from modal")
        console.log(id)
        let recordId=data.expenseCategory+id
        dispatch(addDetail({...data,id:recordId}))
        setId((prev)=>prev+1)
      //dispatch(addDetail(data))
      setFlag(false)
    }

 /**
 * This function will execute when user click on cancel button and cancel form submission event  
 *
 */

 

    function handleCancel()
    {
        //setData({})
        setFlag(false)
    }
    
  return (
    <div className='modal-container'>
        <div className='modal'>
        <div className='modal-header'>
            <h3>Expense Tracker</h3>
        </div>
         <div className='modal-body'>
          <p>Hey your <span style={{color:"red"}}>{category}</span> expense is exceeding your current budget</p>
         </div>
         <div className='budget-modal-footer'>
            <button className='btn btn-secondary' onClick={handleAdd}>Ok</button>
            <button className='btn btn-outline-primary' onClick={handleCancel}>Cancel</button>
         </div>
        </div>
    </div>
  )
}

export default PromptBox