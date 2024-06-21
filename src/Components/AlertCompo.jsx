import React, { useEffect, useState } from 'react'
import "../style.css"

function AlertCompo({message,f,variant,setError}) {

//let [show,setShow]=useState(true);

// useEffect(()=>{
//   console.log("value of f inside alert",f)
// //   if(f)
// //     {
// // //setShow(true)
// //     }
// },[f])

  function generateStyle()
  {
    // let common={padding:"0.5rem 1rem",fontWeight:"bold",width:"max-content",borderRadius:"8px"}
    if(variant=="danger")
        {
            return {backgroundColor:"rgba(255,0,0,0.4)"}
        }
    else if(variant=="warning")
        {
            return {backgroundColor:"orange"}
        }
        else if(variant=="success")
            {
                return {backgroundColor:"green"}
            }

  }
  return (
    f?<div>
    <div className="alert-container" style={generateStyle()}><span>{message}</span>
    <button className="alert-close" onClick={()=>{setError({msg:"",f:false,variant:""})}} >X</button>
    </div>
    </div>:<span></span>
  )
}

export default AlertCompo