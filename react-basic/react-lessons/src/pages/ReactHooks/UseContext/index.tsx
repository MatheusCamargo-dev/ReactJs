import { ReactNode , useContext, useState, createContext} from 'react'
import { Container } from './Container';
import { H1 } from './H1';
import { Div } from './Div';
import { globalState, GlobalState} from '../../../store/GlobalContext';
import { AppContext } from '../../../store/AppContext';

export default function UseContext() {

  return (
    <AppContext>
      <Container>
        <Div>
          <H1 text='Hello world'></H1>
        </Div>
      </Container>
    </AppContext>
  )
}
