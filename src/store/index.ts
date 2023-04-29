import {configureStore} from "@reduxjs/toolkit";
import {CompetitionSlice} from "./slices/CompetitionSlice";

export const store = configureStore({
    reducer: CompetitionSlice.reducer
})