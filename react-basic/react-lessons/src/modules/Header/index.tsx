import { Link } from 'react-router-dom';
import {FaHome, FaGithub, FaReact} from 'react-icons/fa';
import {BsFillFileEarmarkPostFill} from 'react-icons/bs';
import {GoLocation} from 'react-icons/go';
import {Gi3DGlasses, GiTomato} from 'react-icons/gi';
import {MdMovieFilter} from 'react-icons/md';
import { SiRedux } from 'react-icons/si';
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
                        <Link className="nav-link active text-white" to="/" aria-current="page">
                          <FaHome size={24} /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white font-weight-bold" to="/posts"  aria-current="page">
                        <BsFillFileEarmarkPostFill size={18}/> Posts
                      </Link>
                    </li>                 
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/location"  aria-current="page">
                        <GoLocation /> Location
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/repo"  aria-current="page">
                        <FaGithub /> Repositories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white font-weight-bold" to="/pomodoro"  aria-current="page">
                        <GiTomato color={'red'} size={18}/> Pomodoro
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white font-weight-bold" to="/animes"  aria-current="page">
                        <MdMovieFilter size={18}/> Animes
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white font-weight-bold" to="/react-hooks"  aria-current="page">
                        <FaReact color={'#61DAFB'} size={18}/> React Hooks
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white font-weight-bold" to="/react-redux"  aria-current="page">
                        <SiRedux color={'#764ABC'} size={18}/> React Redux
                      </Link>
                    </li>
                </ul> 
            </div>
        </div>
      </nav>
  )
}