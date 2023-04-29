import {createSlice} from "@reduxjs/toolkit";
import {Problem} from "../../types/schema";

export const ProblemsSlice = createSlice({
    name: "problems",
    initialState: {
        problems: [] as Problem[]
    },
    reducers: {
        full_replace: (state, action) => {
            state.problems = action.payload
        }
    }
})
export const {full_replace} = ProblemsSlice.actions
export const selectProblems = (state: any)=>state.problems