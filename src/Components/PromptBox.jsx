import React from 'react'
import "../style.css"
import { useDispatch, useSelector } from 'react-redux'
import { addDetail } from '../store/slices/expenseDetailsSlice'
function PromptBox({data,setData,category,setFlag,setId,id}) {
    
    let dispatch=useDispatch() 
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