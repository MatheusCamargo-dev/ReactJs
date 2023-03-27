import { authReducer } from "@/features/Auth";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        Auth: authReducer
    }
})

type State = typeof store.getState
export type RootState = ReturnType<State>;