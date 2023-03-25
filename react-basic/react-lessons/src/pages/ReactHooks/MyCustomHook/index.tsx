import React, { useRef, useState, useEffect} from 'react'
import { useInterval } from './useInterval';

export default function MyCustomHook() {
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [incrementor] = useState(100);

    useInterval(() => setCounter((c) => c + 1), delay);


    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className='text-warning'> counter: {counter}</h1>
        <h1 className='text-success'> Delay: {delay}</h1>
        <div className='d-flex gap-5'>
          <button className='btn btn-danger' onClick={() => setDelay(d => d + incrementor)}>+{incrementor}</button>
          <button className='btn btn-info' onClick={() => setDelay(d => d - incrementor)}>-{incrementor}</button>
        </div>
      </div>
    )
}
