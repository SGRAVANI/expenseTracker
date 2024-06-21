import { createSlice } from "@reduxjs/toolkit";
const expenseDetailSlice=createSlice({
    name:"expenseDetailSlice",
    initialState:[],
    reducers:{
        addDetail:(state,action)=>{
            state.push(action.payload)
            return state;
        },
        deleteDetail:(state,action)=>{
            let newState=state.filter((ele)=>{
                if(ele.id!=action.payload.id)
                    {
                        return true
                    }
            })
            return newState;
        }

    }

})
export const {addDetail,deleteDetail} =expenseDetailSlice.actions
export default expenseDetailSlice.reducer