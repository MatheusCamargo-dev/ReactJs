import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

type State = typeof store.getState
export type RootState = ReturnType<State>;