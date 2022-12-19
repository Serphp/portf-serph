import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'
import { useState } from "react";


const User = () => {


    return (
    <>

    <NavBar /> 
    <div className="space"></div>
    <Outlet />
    <Footer />
    </>
    
    )
}

export default User;