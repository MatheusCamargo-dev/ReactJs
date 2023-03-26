import React, { useRef, useState, useEffect} from 'react'
import MyCustomHook from './MyCustomHook'
import ReduxConn from './ReduxConn'
import UseContext from './UseContext'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import { UseReducer } from './UseReducer'
import UseRef from './UseRef'
import UseState from './UseState'

export default function ReactHooks() {
 
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-3">
        <div className="col-12">
            <h1 className='text-center text-info mt-5'>React Hook: useState</h1>
            <UseState />
            <h1 className='text-center text-info mt-5'>React Hook: useEffect and useCallback</h1>
            <UseEffect/>
            <h1 className='text-center text-info mt-5'>React Hook: useMemo</h1>
            <UseMemo/>
            <h1 className='text-center text-info mt-5'>React Hook: useRef</h1>
            <UseRef />
            <h1 className='text-center text-info mt-5'>React Hook: useContext</h1>
            <UseContext />
            <h1 className='text-center text-info mt-5'>React Hook: useReducer</h1>
            <UseReducer />
            <h1 className='text-center text-info mt-5'>React Hook: myCustomHook</h1>
            <MyCustomHook />
            <h1 className='text-center text-info mt-5'>React Lib: Redux</h1>
            <ReduxConn />
        </div>
    </div>
  )
}
