import React, { useRef, useState, useEffect} from 'react'
import UseContext from './UseContext'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
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
        </div>
    </div>
  )
}
