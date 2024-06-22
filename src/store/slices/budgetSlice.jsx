import { createSlice } from "@reduxjs/toolkit";
const budgetSlice=createSlice({
    name:"budgetSlice",
    initialState:{name:"", budget:"",food:"",travel:"",utilities:"",other:""},
    reducers:{
        addBudget:(state,action)=>{
             //state.push(action.payload)
             console.log(action.payload)
             return {...action.payload}
            //return state
        },
        updateBudget:(state,action)=>{
            console.log(state,action)
            return {...state,...action.payload};
        //  for(let i=0;i<state.length;i++)
        //     {
        //         if(state[i].id==action.payload.id)
        //             {
        //                 state[i]={...state[i],...action.payload}
        //                 break
        //             }
        //     }
        // }

    }
    }
})
export default budgetSlice.reducer

export const {addBudget,updateBudget}=budgetSlice.actions