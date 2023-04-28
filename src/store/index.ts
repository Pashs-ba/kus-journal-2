import {configureStore} from "@reduxjs/toolkit";
import {Problem} from "../types/schema";

function counterReducer(state = { problems: [{id: 1, name: "some"}, {id: 1, name: "some2"}] as Problem[] }, action: any) {
    if (action.type === 'full') {
        return {
            ...state,
            problems: action.problems
        }
    }
    return state
}

export const baseStore = configureStore({
    reducer: counterReducer
})