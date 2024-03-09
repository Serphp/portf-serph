import { Link } from "react-router-dom";
import '../../src/styles/Nav.scss';
import CerIcon from '../../src/assets/Cericon';
import HomeIcon from "../../src/assets/home";
import ProIcon from "../../src/assets/ProIcon";

export default function Navbar() {
    const theme = localStorage.getItem('theme');

    return (
<>
    <div className="nav2">
            <div className="containernav">
            <Link to="/">
                <span className="link-text">
                    <div className="fa">
                    <HomeIcon/>  </div>
                Quienes somos
                </span>
            </Link>

            <Link to="/About">
                <span className="link-text">
                <div className="fa">
                    <CerIcon/>
                    </div>
                Proyectos
                </span>
            </Link>

            {/* <div className="s"> <img className="logo" src="https://i.imgur.com/Q9bl1Ys.png"/> </div> */}
            <div className="s">
            {theme === 'light' ? (
            <img className="logo" src="https://i.imgur.com/ukAZTRr.png" alt="Light Image" />
            ) : (
            <img className="logo" src="https://i.imgur.com/Q9bl1Ys.png" alt="Dark Image" />
            )}</div>

            <a href="#servicios">
                <span className="link-text">
                    <div className="fa">
                    <ProIcon/>
                    </div>
                Servicios</span>
            </a>

            <Link to="/Certificates">
                <span className="link-text">
                    <div className="fa">
                    <ProIcon/>
                    </div>
                Certificados</span>
            </Link>

        </div>
    </div>
</>
    )
};

