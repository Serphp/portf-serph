import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'
import '../src/styles/Navbar.scss'
import { Navbar } from "../components/Navbar";


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