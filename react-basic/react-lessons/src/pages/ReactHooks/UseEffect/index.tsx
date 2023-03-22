import React, { useState, useEffect, useCallback} from 'react'

interface PropsButton{
  decrementButton: any
}
const Button = React.memo((props: PropsButton) => {
  // console.log('render children')
  const { decrementButton } = props;
  return <button className='btn btn-info' onClick={() => decrementButton(1) }>-</button>
})
export default function UseEffect() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
      // console.log('componentDidUpdate');
    });
    
    useEffect(() => {
      // console.log('componentDidMount'); //NOTE: If you use React.StrictMode this log will be displayed twice
    }, []);
    
    useEffect(() => {
      // console.log(`Counter change for ${counter}`);
    }, [counter]);

    const decrementButton = useCallback((num: number) =>{
      setCounter(c => c - num)
    }, []);

    return (
      <>
       <div className="d-flex mt-5 flex-column align-items-center justify-content-center">
          <h1>Counter: {counter}</h1>
          <div className="d-flex gap-3">
            <button className='btn btn-danger' onClick={() => setCounter(counter + 1)}>+</button>
            <Button decrementButton={decrementButton}/>

          </div>
      </div>
      </>
    )
}
