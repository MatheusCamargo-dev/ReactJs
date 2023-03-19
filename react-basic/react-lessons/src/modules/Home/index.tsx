import { FaInstagram, FaLinkedinIn, FaNodeJs, FaPhp, FaPython, FaReact,  FaStar } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io"
import { SiMysql } from "react-icons/si";
import { ImRocket } from "react-icons/im";
import { BsGit, BsGithub, BsWhatsapp } from "react-icons/bs";


export default function Home() {
  return (
    <>
       <header className="masthead bg-secondary text-white text-center p-5">
            <div className="container d-flex align-items-center flex-column justify-content-center">
                <img className="masthead-avatar mb-5" width={400} height={400} src="/src/assets/img/avataaars.svg" alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">Matheus Camargo</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FaStar/></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Front-end web developer</p>
            </div>
        </header>
        <section className="page-section portfolio bg-white" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FaStar/></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            
                            <IoLogoCss3 size={250} />
                            <h2 className="text-">CSS</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <IoLogoHtml5 size={250}/>
                            <h2 className="text-">HTML</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <IoLogoJavascript size={250}/>
                            <h2 className="text-">Javascript</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <FaPhp size={250}/>
                            <h2 className="text-">PHP</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <FaReact size={250}/>
                            <h2 className="text-">React</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <FaPython size={250}/>
                            <h2 className="text-">Python</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <SiMysql size={250}/>
                            <h2 className="text-">MySQL</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 pt-3">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <BsGit size={250}/>
                            <h2 className="text-">Git</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto d-flex flex-column justify-content-center align-items-center ">
                            <FaNodeJs size={250}/>
                            <h2 className="text-">Node Js</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Contact</h4>
                        <p className="lead mb-0">
                            Email:
                            matheuscamargodev@gmail.com
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.linkedin.com/in/matheus-camargo-dev/"><FaLinkedinIn /></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://github.com/MatheusCamargo-dev"><BsGithub /></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://api.whatsapp.com/send?phone=5551997817499"><BsWhatsapp /></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.instagram.com/matheus_camargo.dev/"><FaInstagram /></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Me</h4>
                        <p className="lead mb-0">
                            Trying to do better! <ImRocket />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Matheus Romeiro Camargo 2023</small></div>
        </div>
    </>
  )
}