/**
 * This component renders pill showing whether budget is exceeded or withing input budget
 *@param {Object-Props} content  - contains text to display in pill 
 * @returns {ReactNode} A React element inside insightTable's Limit Status column.
 */

import React from 'react'
import "../style.css"
function Pill({content}) {
  return (
    <div className='d-flex justify-content-center'>
    <div className='pill' style={{backgroundColor:content=="exceeded"?"red":"green"}}>{content}</div></div>
  )
}

export default Pill