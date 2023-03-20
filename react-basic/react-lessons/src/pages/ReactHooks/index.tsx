import React, { useRef, useState} from 'react'
import UseState from './UseState'

export default function ReactHooks() {
 
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="col-12">
            <h1 className='text-center text-info mt-5'>React Hook: useState</h1>
            <UseState />
        </div>
    </div>
  )
}
