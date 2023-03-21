import { NavLink, Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import {
    Footer,
    Navbar,
} from "../components"
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'




const User = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 3000); // tiempo en milisegundos para mostrar el componente de "loading"
    setTimeout(function() { document.getElementById("loading").style.transform = "translateX(100%)";}, 3000);
    }, []);

    return (  
    <>
    
    <Navbar />
    <div className="header">
<<<<<<< HEAD
        <input type="checkbox" id="dark-mode" />
        <label for="dark-mode"></label>
        
=======
    {/* <NavLink to="/"> Home </NavLink>
    <NavLink to="/Certificates"> Certificates </NavLink>
    <NavLink to="/proyectos"> Proyectos </NavLink> */}
>>>>>>> fdb93807a8e64fa8be9cdddd7dfbf67f40d96d2d
    <div className="headermenu">
    </div>
    <div className="titlen">
        <span className="beta">Theme </span>  /Serph 
    </div>
    </div>
    {isLoading ? <Loading /> : <Outlet />}
    <Footer />
    </>

    )
}

export default User;