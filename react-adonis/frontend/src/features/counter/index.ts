import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface CounterState {
    value: number
};
const initialState: CounterState = {
    value: 5
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementAmount: (state, action: PayloadAction<number>) =>{
            state.value = action.payload;
        } 
    }
})

export const {increment, incrementAmount} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;