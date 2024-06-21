import { configureStore } from "@reduxjs/toolkit";
import  expenseDetailSlice from "./slices/expenseDetailsSlice";
import  budgetSlice  from "./slices/budgetSlice";

import preferenceSlice from "./slices/preferenceSlice";
const store=configureStore({
    reducer:{
        "budget":budgetSlice,
        "expenseDetail":expenseDetailSlice,
        "preferences":preferenceSlice,
    }
})
export default store;