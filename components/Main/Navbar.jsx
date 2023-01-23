import { Link } from "react-router-dom";


export default function Navbar() {


    return (
    <>
        <nav>
        <div class="nav2">
        {/* <div class="deco">_</div> */}
            <div className="containernav">
            <li className="nav-item">
                <Link to="/">
                <span className="link-text"><svg className="fa2" width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <path d="M9 22V12h6v10"></path>
                </svg>Inicio</span>
                </Link>
            </li>
            {/* <li className="nav-item">
                <Link to="/about">
                    <span className="link-text"><img className="img" src="src/icons/about.svg"></img>About Me</span>
                </Link>
            </li> */}

            <li className="nav-item">
                <Link to="/Certificates">
                    <span className="link-text">
                        <svg className="fa2" width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>Certificates</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/proyectos">
                    <span className="link-text"><svg className="fa2" width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m16 18 6-6-6-6"></path>
  <path d="m8 6-6 6 6 6"></path>
</svg>Proyects</span>
                </Link>
            </li>
        </div>
        <li className="logo">Serphp</li>
        {/* <div class="deco">_</div> */}
        </div>
        </nav>

    </>
    )
};