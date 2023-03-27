import Link from 'next/link';
import {FaHome, FaGithub, FaReact} from 'react-icons/fa';
export default function Header() {
  
  return (
      <nav className="navbar navbar-expand-sm bg-midnight-blue">
        <div className="container-fluid">
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="collapsibleNavId">
                <ul className="navbar-nav py-2 ">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" href="/" aria-current="page">
                          <FaHome size={24} /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white" href="/app" aria-current="page">
                          <FaHome size={24} /> App
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white" href="/info" aria-current="page">
                          <FaReact size={24} /> info
                        </Link>
                    </li>
                </ul> 
            </div>
        </div>
      </nav>
  )
}