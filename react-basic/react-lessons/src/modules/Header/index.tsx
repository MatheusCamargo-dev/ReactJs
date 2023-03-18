import { Link } from 'react-router-dom';
import {FaHome } from 'react-icons/fa';
import {BsFillFileEarmarkPostFill} from 'react-icons/bs';
export default function Header() {
  
  return (
      <nav className="navbar navbar-expand-sm bg-info">
        <div className="container-fluid">
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="collapsibleNavId">
                <ul className="navbar-nav py-2 ">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="/" aria-current="page">
                          <FaHome size={24} /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/posts"  aria-current="page">
                        <BsFillFileEarmarkPostFill /> Posts
                      </Link>
                    </li>

                </ul> 
            </div>
        </div>
      </nav>
  )
}