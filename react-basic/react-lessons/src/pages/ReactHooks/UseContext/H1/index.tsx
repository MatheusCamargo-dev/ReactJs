import { useContext } from "react";
import { GlobalContext } from "../../../../store/AppContext";
export const H1 = ({text}: { text: string}) => {
    const context = useContext(GlobalContext);
    const {contextState, setContextState} = context;


    return <h1 onClick={() => setContextState((prev) => ({...prev, counter: prev.counter + 1}) )} >{contextState.title}{text}</h1>
}