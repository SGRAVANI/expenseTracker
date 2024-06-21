import { createSlice } from "@reduxjs/toolkit";
let preferenceSlice=createSlice({
    name:"preferences",
    initialState:{isDarkMode:true},
    reducers:{
        toggleDarkMode:(state,action)=>
        {
            state.isDarkMode=!state.isDarkMode;
            return state;
        }
    }
})

export const {toggleDarkMode} =preferenceSlice.actions
export default preferenceSlice.reducer