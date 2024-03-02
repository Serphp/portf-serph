import { Link } from "react-router-dom";
import Mensaje from "../components/Mensaje";
import React, { useState, useEffect } from 'react';

export default function Select({ intervalTime = 5000 }) {
    const slogans = ["Sencillo y compacto", "Unico y creativo", "Objetivo y éxito"];
    const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
    const [showperfil, setperfil] = useState(false);
    const [showcompany, setcompany] = useState(false);

    const theme = localStorage.getItem('theme');

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, intervalTime);


    return () => clearInterval(interval);
    }, [slogans, intervalTime]);


    const toggleBotonesPerfil = () => {
        setperfil(!showperfil);
    };

    const toggleBotonesCompany = () => {
        setcompany(!showcompany);
    };

    return (
        <>

        <div className="blank">
        <section className="blank2">
            <div className="ninicio">
                
            {theme === 'light' ? (
    <img className="nlogo" src="https://i.imgur.com/ukAZTRr.png" alt="Light Image" />
) : (
    <img className="nlogo" src="https://i.imgur.com/Q9bl1Ys.png" alt="Dark Image" />
)}


            <div className="ncontenedor">
                <h6 className="ndes"> {slogans[currentSloganIndex]} </h6>

                <article onClick={toggleBotonesPerfil}>
                    {!showperfil ? (
                        <div className="obra2">Perfiles Profesionales</div>
                        
                    ) : (
                    <div className="obracon">
                        <button className="obraclose">X</button>
                        </div>
                    )
                    }
                </article>


                {
                    showperfil && (
                    <>
                    <Link to="/home">
                    <div className="obra2"> 
                    <IconPro tamaño={tamaño}/>
                    Perfil profesional 
                    </div>
                    </Link>
                    
                    <Link className="obra2" target="_blank" to="https://www.linkedin.com/in/bryaninit/">
                    <IconLN tamaño={tamaño}/> LinkedIn</Link>

                    <Link className="obra2" target="_blank" to="https://github.com/Serphp">
                    <IconGB tamaño={tamaño}/> Github </Link>
                    </>
                    )
                }

                <article onClick={toggleBotonesCompany}>
                    {!showcompany ? (
                        <div className="obra2">¿Buscas un servicio profesional?</div>
                        
                    ) : (
                    <div className="obracon">
                        <button className="obraclose">X</button>
                        </div>
                    )
                    }
                </article>

                {
                    showcompany && (
                        <>
                        <Link to="/company"><div className="obra2"> 
                        <IconCompany tamaño={tamaño}/>
                        ¿Buscas un servicio? </div></Link>
        
                        <Link className="obra2" to="mailto:serphp@hotmail.com">
                        <IconCO tamaño={tamaño} /> Ponerse en contacto
                        </Link>
                        </>
                    )
                }

                <h6 className="ndes">Copyright © 2023 - 2024 Serphp</h6>
                </div>
            </div>

        </section>
        </div>

        </>
        
    )
};

const tamaño = 40;

function Icon({ tamaño, children }) {
return (
    <i>
    <svg
        width={tamaño}
        height={tamaño}
        className="obraicon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        {children}
    </svg>
    </i>
);
}

function IconCO({ tamaño }) {
return (
    <Icon tamaño={tamaño}>
    <path d="m22.08 7.892-9.74-4.813a.767.767 0 0 0-.68 0L1.923 7.892a.75.75 0 0 0-.422.67V20.25a.754.754 0 0 0 .759.75h19.48a.756.756 0 0 0 .759-.75V8.563a.75.75 0 0 0-.42-.671ZM12 4.588l8.11 4.006-8.237 4.067-8.109-4.005L12 4.588Z"></path>
    </Icon>
);
}

function IconGB({ tamaño }) {
return (
    <Icon tamaño={tamaño}>
    <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
    </Icon>
);
}

function IconLN({ tamaño }) {
return (
    <Icon tamaño={tamaño}>
    <path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z"></path>
    </Icon>
);
}

function IconPro({ tamaño }) {
return (
    <Icon tamaño={tamaño}>
    <path fill-rule="evenodd" d="M14.942 9.683a.625.625 0 0 1 0 .885l-3.75 3.75a.625.625 0 0 1-.885 0l-1.875-1.875a.625.625 0 1 1 .885-.885l1.433 1.433 3.307-3.308a.625.625 0 0 1 .885 0Z" clip-rule="evenodd"></path>
    <path d="m14.841 5.141-1.151-1.18.894-.872.777.796 1.113-.014a3.613 3.613 0 0 1 3.655 3.655l-.013 1.113.795.777a3.613 3.613 0 0 1 0 5.168l-.796.777.014 1.113a3.612 3.612 0 0 1-3.655 3.655l-1.113-.013-.777.795a3.613 3.613 0 0 1-5.168 0l-.777-.796-1.113.014a3.612 3.612 0 0 1-3.655-3.655l.013-1.113-.795-.777a3.612 3.612 0 0 1 0-5.168l.796-.777-.014-1.113a3.613 3.613 0 0 1 3.655-3.655l1.113.013.777-.795a3.613 3.613 0 0 1 5.168 0l-.894.872a2.362 2.362 0 0 0-3.38 0l-1.15 1.18-1.65-.02a2.363 2.363 0 0 0-2.389 2.39l.02 1.648-1.18 1.151a2.362 2.362 0 0 0 0 3.38l1.18 1.15-.02 1.65a2.362 2.362 0 0 0 2.39 2.389l1.648-.02 1.151 1.18a2.361 2.361 0 0 0 3.38 0l1.15-1.18 1.65.02a2.363 2.363 0 0 0 2.389-2.39l-.02-1.648 1.18-1.151a2.363 2.363 0 0 0 0-3.38l-1.18-1.15.02-1.65a2.364 2.364 0 0 0-2.39-2.389l-1.648.02Z"></path>
    </Icon>
);
}

function IconCompany({ tamaño }) {
return (
    <Icon tamaño={tamaño}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"></path>
    <path d="M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
    <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Z"></path>
    </Icon>
);
}
