import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'


const User = () => {
    return (
    <main className="container">
    <NavBar /> 
    <Outlet />
    <Footer />
    </main>
    )
}

export default User;