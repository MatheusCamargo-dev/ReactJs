import { ReactNode, useContext } from "react";
import { GlobalContext } from "../../../../store/AppContext";

export const Div = ({children}: {children: ReactNode}) => {
    const context = useContext(GlobalContext);
    const {contextState} = context;

    return <div className="App bg-white p-3 rounded"><h1>Counter:{contextState.counter}</h1>{children}</div>
  }