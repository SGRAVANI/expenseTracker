import React from 'react'
import "../style.css"
function Pill({content}) {
  return (
    <div className='d-flex justify-content-center'>
    <div className='pill' style={{backgroundColor:content=="exceeded"?"red":"green"}}>{content}</div></div>
  )
}

export default Pill