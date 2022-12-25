import { Link } from "react-router-dom";


export const Navbar2 = () => {
    return (
    <>
        <nav>
        <div class="nav2">
        <li className="logo">Serphp</li>
            <ul>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                <img className='img' src="./src/nav/home.png"></img>
                    <span className="link-text">about</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                <img className='img' src="./src/nav/id.png"></img>
                    <span className="link-text">mail</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Certificates">
                <img  className='img' src="./src/nav/certificate.png"></img>
                    <span className="link-text">linkedin</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/proyectos">
                <img className='img' src="./src/nav/proyectos.png"></img>
                    <span className="link-text">twitter</span>
                </Link>
            </li>
        </ul>
        </div>
        </nav>

    </>
    )
};
