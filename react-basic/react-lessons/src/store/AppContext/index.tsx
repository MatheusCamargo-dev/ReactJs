import { createContext, useState } from "react";
import { globalState, GlobalState } from "../GlobalContext";

export const GlobalContext = createContext<{
    contextState: GlobalState;
    setContextState: React.Dispatch<React.SetStateAction<GlobalState>>;
  }>({
    contextState: globalState,
    setContextState: () => {},
  });
export const AppContext = ({children}: any) => {
  const [contextState, setContextState] = useState<GlobalState>(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};
