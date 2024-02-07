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
                
                <img className="nlogo" src="https://i.imgur.com/Q9bl1Ys.png"/>

            <div className="ncontenedor">
                <h6 className="ndes"> {slogans[currentSloganIndex]} </h6>
                <Link to="/home"><div className="obra2"> 
                <IconPro/>
                Perfil profesional </div></Link>
                <Link to="#"><div className="obra2"> 
                <IconCompany/>
                Serphp Company </div></Link>
                <h6 className="ndes">Copyright © 2023 - 2024 Serphp</h6>
                </div>
            </div>

        </section>
        </div>

        </>
        
    )
};

function IconPro(){
    return (
        <i><svg width="40" height="40" className="obraicon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14.942 9.683a.625.625 0 0 1 0 .885l-3.75 3.75a.625.625 0 0 1-.885 0l-1.875-1.875a.625.625 0 1 1 .885-.885l1.433 1.433 3.307-3.308a.625.625 0 0 1 .885 0Z" clip-rule="evenodd"></path>
        <path d="m14.841 5.141-1.151-1.18.894-.872.777.796 1.113-.014a3.613 3.613 0 0 1 3.655 3.655l-.013 1.113.795.777a3.613 3.613 0 0 1 0 5.168l-.796.777.014 1.113a3.612 3.612 0 0 1-3.655 3.655l-1.113-.013-.777.795a3.613 3.613 0 0 1-5.168 0l-.777-.796-1.113.014a3.612 3.612 0 0 1-3.655-3.655l.013-1.113-.795-.777a3.612 3.612 0 0 1 0-5.168l.796-.777-.014-1.113a3.613 3.613 0 0 1 3.655-3.655l1.113.013.777-.795a3.613 3.613 0 0 1 5.168 0l-.894.872a2.362 2.362 0 0 0-3.38 0l-1.15 1.18-1.65-.02a2.363 2.363 0 0 0-2.389 2.39l.02 1.648-1.18 1.151a2.362 2.362 0 0 0 0 3.38l1.18 1.15-.02 1.65a2.362 2.362 0 0 0 2.39 2.389l1.648-.02 1.151 1.18a2.361 2.361 0 0 0 3.38 0l1.15-1.18 1.65.02a2.363 2.363 0 0 0 2.389-2.39l-.02-1.648 1.18-1.151a2.363 2.363 0 0 0 0-3.38l-1.18-1.15.02-1.65a2.364 2.364 0 0 0-2.39-2.389l-1.648.02Z"></path>
        </svg></i>
    )
}

function IconCompany(){
    return(
        <i>
        <svg width="40" height="40" className="obraicon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="m7.757 6.344 4.242-4.242 4.243 4.242L12 10.587 7.757 6.344Zm2.828 0L12 4.93l1.415 1.414L12 7.758l-1.414-1.414Z" clip-rule="evenodd"></path>
        <path fill-rule="evenodd" d="m2.1 12 4.243-4.242L10.586 12l-4.243 4.242L2.101 12Zm2.829 0 1.414-1.414 1.414 1.415-1.414 1.414L4.93 12Z" clip-rule="evenodd"></path>
        <path fill-rule="evenodd" d="m13.414 12 4.243 4.243 4.242-4.242-4.242-4.243L13.414 12Zm4.243-1.414-1.415 1.415 1.415 1.414L19.07 12l-1.414-1.415Z" clip-rule="evenodd"></path>
        <path fill-rule="evenodd" d="m7.757 17.657 4.242-4.243 4.243 4.243L12 21.899l-4.242-4.242Zm2.828 0L12 16.243l1.415 1.414L12 19.071l-1.414-1.414Z" clip-rule="evenodd"></path>
        </svg>
    </i>
    )
}