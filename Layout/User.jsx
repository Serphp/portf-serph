import { Outlet } from "react-router-dom";
//mport Footer from "../components/Footer";
//import NavBar from "../components/NavBar";
//import BirdApi from "../components/BirdsDetails";

const User = () => {

    return (
    <body className="main">
     {/* <NavBar /> <Footer /> */}
    <Outlet />
    
    </body>)
}

export default User;