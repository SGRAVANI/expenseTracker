
/**
 * @componnet This component renders when data successfully submitted or deleted.
 *@params {Prop-Object} message- text to display in SuccessMessage componnet
 * @returns {ReactNode} A React element that renders on succesfull form submission or deletetion of entry in expense detail table.
 */
import React from 'react'

function SuccessMessage({message}) {
  return (
    <div style={{width:"max-content",padding:"0.3rem 0.8rem",backgroundColor:"green",color:"white",borderRadius:"8px",fontWeight:"600",textAlign:"center",margin:"0 auto"}} className='my-3'>{message}</div>
  )
}

export default SuccessMessage