import { Link } from "react-router-dom";
import '../../src/styles/Nav.scss';
import CerIcon from '../../src/assets/Cericon';
import HomeIcon from "../../src/assets/home";
import ProIcon from "../../src/assets/ProIcon";

export default function Navbar() {

    return (
<>
<nav>
        <div class="nav2">
            <div className="containernav">

                <Link to="/">
                    <span className="link-text">
                        <div className="fa">
                        <HomeIcon/>  </div>
                    Inicio
                    </span>
                </Link>
        
         
                <Link to="/Certificates">
                    <span className="link-text">
                    <div className="fa">
                        <CerIcon/>
                        </div>
                    Certificates
                    </span>
                </Link>
           
           
                <Link to="/proyectos">
                    <span className="link-text">
                        <div className="fa">
                        <ProIcon/>
                        </div>
                    Proyects</span>
                </Link>
           
        </div>
        </div>
        </nav> 
</>
    )
};

