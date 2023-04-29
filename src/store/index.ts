import {configureStore} from "@reduxjs/toolkit";
import {ProblemsSlice} from "./problems/ProblemsSlice";

export const store = configureStore({
    reducer: ProblemsSlice.reducer
})