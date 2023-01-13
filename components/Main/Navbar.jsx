import { Link } from "react-router-dom";


export default function Navbar() {


    return (
    <>
        <nav>
        <div class="nav2">
        {/* <div class="deco">_</div> */}
            <ul className="containernav">
            <li className="nav-item">
                <Link to="/">
                <span className="link-text"><img className="img" src="src/icons/home.svg"></img>Inicio</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about">
                {/* <img className='img' src="https://raw.githubusercontent.com/Serphp/portf-serph/master/src/nav/id.png"></img> */}
                    <span className="link-text"><img className="img" src="src/icons/about.svg"></img>About Me</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/Certificates">
                {/* <img  className='img' src="https://raw.githubusercontent.com/Serphp/portf-serph/master/src/nav/certificate.png"></img> */}
                    <span className="link-text"><img className="img" src="src/icons/home.svg"></img>Certificates</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/proyectos">
                {/* <img className='img' src="https://raw.githubusercontent.com/Serphp/portf-serph/master/src/nav/proyectos.png"></img> */}
                    <span className="link-text"><img className="img" src="src/icons/home.svg"></img>Proyects</span>
                </Link>
            </li>
        </ul>
        <li className="logo">Serphp</li>
        {/* <div class="deco">_</div> */}
        </div>
        </nav>

    </>
    )
};