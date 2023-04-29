import {createSlice} from "@reduxjs/toolkit";
import {Problem} from "../../types/schema";

export const CompetitionSlice = createSlice({
    name: "competition",
    initialState: {
        problems: [] as Problem[]
    },
    reducers: {
        clean_all:(state)=>{
            state.problems = []
        },
        full_replace: (state, action) => {
            state.problems = action.payload
        },
        replace_one: (state, action) => {
            let index = -1
            for (let i = 0; i < state.problems.length; i++) {
                if (state.problems[i].id === action.payload.id) {
                    index = i
                    break
                }
            }
            if (index !== -1) {
                state.problems[index] = action.payload
            }
        }
    }
})
export const {full_replace, replace_one, clean_all} = CompetitionSlice.actions
export const selectProblems = (state: any) => state.problems