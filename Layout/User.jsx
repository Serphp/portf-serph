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
    <div className=""></div>
    <Outlet />
    <Footer />
    </>

    )
}

export default User;