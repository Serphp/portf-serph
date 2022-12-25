import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
    <>
        <nav>
        <div class="nav2">
        <div class="deco">_</div>
            <ul>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                <img className='img' src="./src/nav/home.png"></img>
                    <span className="link-text">Inicio</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                <img className='img' src="./src/nav/id.png"></img>
                    <span className="link-text">Me</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/Certificates">
                <img  className='img' src="./src/nav/certificate.png"></img>
                    <span className="link-text">Certificates</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/proyectos">
                <img className='img' src="./src/nav/proyectos.png"></img>
                    <span className="link-text">Proyects</span>
                </Link>
            </li>
        </ul>
        <li className="logo">Serphp</li>
        <div class="deco">_</div>
        </div>
        </nav>

    </>
    )
};
