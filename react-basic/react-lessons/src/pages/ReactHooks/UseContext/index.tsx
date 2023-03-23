import { ReactNode , useContext, useState, createContext} from 'react'
interface GlobalState {
  title: string;
  counter: number;
}
const globalState:GlobalState = {
  title: 'This is my title: ',
  counter: 0
}




const Container = ({children}: {children: ReactNode}) => {
  return <div className="d-flex justify-content-center align-items-center">{children}</div>
}


export default function UseContext() {
  const [contextState, setContextState] = useState<GlobalState>(globalState);
  const GlobalContext = createContext({contextState, setContextState});



  const Div = ({children}: {children: ReactNode}) => {
    const context = useContext(GlobalContext);
    const {contextState} = context;

    return <div className="App bg-white p-3 rounded"><h1>Counter:{contextState.counter}</h1>{children}</div>
  }

  const H1 = ({text}: { text: string}) => {
    const context = useContext(GlobalContext);
    const {contextState, setContextState} = context;


    return <h1 onClick={() => setContextState({...contextState, counter: contextState.counter + 1})} >{contextState.title}{text}</h1>
  }
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Container>
        <Div>
          <H1 text='Hello world'></H1>
        </Div>
      </Container>
    </GlobalContext.Provider>
  )
}
