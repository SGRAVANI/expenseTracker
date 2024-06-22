import React from 'react'
import { useSelector } from 'react-redux'
import Pill from './Pill'
function BudgetInsight() {
    let state=useSelector((state)=>state)
    function getInsightRows()
  {
        
     let o={}
     let all=0
     for(let ele of state.expenseDetail)
      {
        console.log(ele,"ele")
        o[ele.expenseCategory]=o[ele.expenseCategory]?Number(o[ele.expenseCategory])+Number(ele.expenseAmount):Number(ele.expenseAmount);
        all+=Number(ele.expenseAmount)
      }
      o={...o,all}
      console.log(o)
      let rows=[]
      for(let key in o)
        {
          let localOb={category:key,limitStatus:(()=>{
            if(key=="all" )
              {
                if( o[key]>state.budget.budget)
                  {
               return "exceeded"
                  }
                  else{
                    return "within"
                  }
              }
            else if(/*o[key]>state.budget.budget||*/o[key]>state.budget[key]){return "exceeded"}
        else{
          return "within"
        }})(),budget:key=="all"?state.budget.budget:state.budget[key],expense:o[key],balance:key=="all"?Number(state.budget.budget)-o[key]:state.budget[key]-o[key]}
          rows.push(<tr key={`cat-${key}`}>
            <td>{localOb.category}</td>
            <td><Pill content={localOb.limitStatus}/></td>
            <td>{localOb.budget}</td>
            <td>{localOb.expense}</td>
            <td>{localOb.balance}</td>
          </tr>)
        }
        console.log(rows)
    return rows;
  
  }
  return (
    <section className='sections'>
      <h4>Budget Insights</h4>
      <div className='table-responsive w-100'>
   <table className={state.preferences.isDarkMode?"table table-sm table-striped table-hover table-dark align-middle":'table table-sm table-striped table-hover align-middle'}>
    
    <thead>
      <tr>
      <th>Category</th>
      <th>Limit Status</th>
      <th>Budget</th>
      <th>Expense</th>
      <th>Balance</th>
      </tr>
    </thead>
    <tbody>
     {getInsightRows()}
    </tbody>
   </table>
   </div>
    </section>
  )
}

export default BudgetInsight