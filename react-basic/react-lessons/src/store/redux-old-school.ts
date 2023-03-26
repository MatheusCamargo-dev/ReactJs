import { createStore } from "redux";

const initialState = {
    counter:{
        value: 5
    }
}

const reducer = (state = initialState, action: { type: string, payload: any }) => {
    switch(action.type){
        case "counter/increment": {
            const counterValue = state.counter.value;
            return {...state, counter:{ value: counterValue + 1}};
        }
        case "counter/incrementAmount": {
            const counterValue = state.counter.value;
            return {...state, counter:{ value: action.payload}};
        }
        default: {
            return state;
        }
    }
}
export const store = createStore(reducer);