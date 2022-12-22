import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'
import { useState } from "react";
import { Navbar2 } from "../components/NavBar2";


const User = () => {
    return (
    <>
    
    <Navbar2 />
    <div className=""></div>
    <Outlet />
    <Footer />
    </>
    )
}

export default User;