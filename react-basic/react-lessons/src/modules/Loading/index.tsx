import React, { useEffect, useRef } from 'react'
interface Props{
  load: boolean;
  reverse?: boolean;
}
export default function Loading(props: Props) {
  const { load, reverse } = props;
  const styleSpinner  = reverse ? {animationDirection: 'reverse'} : {};
  return (
    <>
      <div className={ load ? 'd-flex text-white p-5 align-items-center' : 'd-none'}>
          <h1>{reverse ? 'Reloading' : 'Loading'}</h1>
          <div className="ms-1 spinner-border text-white" style={styleSpinner} role="status">
            <span className="sr-only"></span>
          </div>
        </div>
    </>
  )
}