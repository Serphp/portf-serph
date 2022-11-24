import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.css'


const User = () => {
    return (
    <main>
    <NavBar /> 
    <Outlet />
    <Footer />
    </main>
    )
}

export default User;