import { Link } from "react-router-dom";
import Mensaje from "../components/Mensaje";
import React, { useState, useEffect } from 'react';


export default function Select({ intervalTime = 5000 }) {
    const slogans = ["Sencillo y compacto", "Unico y creativo", "Objetivo y éxito"];
    const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, intervalTime);

    return () => clearInterval(interval);
    }, [slogans, intervalTime]);

    return (
        <>

        <div className="blank">

        <section className="blank2">
            
            <div className="ninicio">
            <img class="nlogo" src="https://i.imgur.com/mUMi6bU.png"/>
            <div className="ncontenedor">
                <h6 className="ndes"> {slogans[currentSloganIndex]} </h6>
                <Link to="/home"><div className="obra"> Perfil profesional </div></Link>
                <Link to="#"><div className="obra"> Serphp Company </div></Link>
                <h6 className="ndes">Copyright © 2023 - 2024 Serphp</h6>
                </div>
            </div>

        </section>
        </div>

        </>
        
    )
};
