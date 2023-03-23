import { createContext, useReducer, useState } from "react";
import { globalState, GlobalState } from "../../../store/GlobalContext";
import { reducer } from "./Reducer";


export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const {counter, title} =  state;
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="text-danger">{title} {counter}x times</h1>
        <div className="d-flex gap-5">
            <button className="btn btn-success" onClick={() => dispatch({ type: 'change'})}>click</button>
            <button className="btn btn-danger" onClick={() => dispatch({ type: 'invert'})}>Invert text</button>

        </div>
    </div>
  );
};
