import React from 'react'
import { Link } from 'react-router-dom';
import {BsFillFileEarmarkPostFill} from 'react-icons/bs';
export default function UseMemo() {
  return (
    <>
     <div className="d-flex flex-column align-items-center justify-content-center">
        <Link className="nav-link text-white font-weight-bold" to="/posts"  aria-current="page">
          <BsFillFileEarmarkPostFill size={35}/> Posts
        </Link>

     </div>
    
    </>
  )
}
