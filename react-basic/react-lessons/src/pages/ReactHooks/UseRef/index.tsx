import React, { useRef, useState} from 'react'
import { FaClipboard } from 'react-icons/fa';

export default function UseRef() {
    const input = useRef<HTMLInputElement>(null);

    const toCopy = () => {
      let copyText = input.current?.value as string;

        if(copyText !== ''){
            navigator.clipboard.writeText(copyText);
            alert("Copied text.")
        }else{
            alert("Please write text, you don't copy text null.")            
        }
    }
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <input type="text" className="form-control" ref={input} placeholder='write a text' />
          <button id="clipboard" className="btn btn-secondary ms-1 d-flex align-items-center" onClick={toCopy}><FaClipboard /> copy</button>
        </div>
      </div>
    )
}
