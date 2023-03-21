import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import {
    Footer,
    Navbar,
} from "../components"
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'
const InicialTheme = localStorage.getItem('theme') === 'dark';

const User = () => {
    const [theme, setTheme] = useState(InicialTheme);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 3000); // tiempo en milisegundos para mostrar el componente de "loading"
    setTimeout(function() { document.getElementById("loading").style.transform = "translateX(100%)";}, 3000);
    }, []);
    

    // useEffect(() => {
    //     document.documentElement.setAttribute("data-theme", theme);
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    useEffect(() => {
        if (theme){
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (  
    <>
    
    <Navbar />
    <div className="header">

    <input type="checkbox" id="dark-mode" onClick={() => setTheme(!theme)} />
    <label for="dark-mode"></label>

    {/* <NavLink to="/"> Home </NavLink>
    <NavLink to="/Certificates"> Certificates </NavLink>
    <NavLink to="/proyectos"> Proyectos </NavLink> */}

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