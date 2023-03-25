import React, { useRef, useState, useEffect} from 'react'
// import Loading from '../../../modules/Loading';

export const useInterval = (cb:Function, delay:number = 1000) => {
    const savedCallback = useRef<Function>(() => {});

    useEffect(() => {
        savedCallback.current = cb;
    }, [cb])

    useEffect(() => {
        function tick(){
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
}
