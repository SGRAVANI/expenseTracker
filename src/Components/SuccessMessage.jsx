import React from 'react'

function SuccessMessage({message}) {
  return (
    <div style={{width:"max-content",padding:"0.3rem 0.8rem",backgroundColor:"green",color:"white",borderRadius:"8px",fontWeight:"600",textAlign:"center",margin:"0 auto"}} className='my-3'>{message}</div>
  )
}

export default SuccessMessage