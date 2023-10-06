import { Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';

import {
    Footer,
    Navbar,
} from "../components"
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css'
import '../src/styles/Global.scss'
import SunIcon from "../src/assets/sunIcon";
import MonnIcon from "../src/assets/MoonIcon";
const InicialTheme = localStorage.getItem('theme') === 'dark';

const User = () => {
    const [theme, setTheme] = useState(InicialTheme || false);
    const [isLoading, setIsLoading] = useState(true);
    const { pathname } = useLocation();

useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 3000); // tiempo en milisegundos para mostrar el componente de "loading"
    setTimeout(function() { document.getElementById("loading").style.transform = "translateX(100%)";}, 3000);
}, []);

useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

useEffect(() => {
if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", "light");
    }
}, [theme]);

return (  
    <>
    
    {/* <Navbar /> */}
    <div className="header">

        <button className="buttont" onClick={() => setTheme(!theme)}>
            {theme ? <SunIcon/> : <MonnIcon/>}
        </button>
    
    </div>

    <div className="titlen">
            {/* <span className="beta">Theme </span>   */}
            /Serphp
        </div>

    {/* {isLoading ? <Loading /> : <Outlet />} */}
    <Outlet/>
    <Footer />
    </>

    )
}

export default User;