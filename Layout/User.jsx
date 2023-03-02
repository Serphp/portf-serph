import { Outlet } from "react-router-dom";

import {
    Footer,
    Navbar,
} from "../components"

//styles
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'
//import '../src/styles/Navbar.scss'



const User = () => {
    return (  
    <>
    
    <Navbar />
    <div className="header">
    <div className="headermenu">
    </div>
    <div className="titlen">
        <span className="beta">Theme </span>  /Serph 
        {/* <h1><span id="serphp">Serphp</span></h1> */}
    </div>
    </div>
    <Outlet />
    <Footer />
    </>

    )
}

export default User;