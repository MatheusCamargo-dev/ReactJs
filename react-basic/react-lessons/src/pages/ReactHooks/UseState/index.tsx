import React, { useRef, useState} from 'react'
import Loading from '../../../modules/Loading';

export default function UseState() {
    const [reverseSpinner, setReverseSpinner] = useState<boolean>(false);

    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
          <Loading load={true} reverse={reverseSpinner}/>
          <button className="btn btn-info col-2" onClick={() => setReverseSpinner(!reverseSpinner)}>{ reverseSpinner ? 'Load' : 'Reload'}</button>
      </div>
    )
}
