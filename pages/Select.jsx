import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import Slider from "../components/Company/slider";

export default function Select({ intervalTime = 5000 }) {
  const slogans = [
    "Fiabilidad en cada clic",
    "Rendimiento a tu alcance",
    "Escalable y siempre listo",
    "Soporte continuo para tu éxito",
];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [showperfil, setperfil] = useState(false);
  const [showcompany, setcompany] = useState(false);

  //swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const theme = localStorage.getItem("theme");

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
            {theme === "light" ? (
              <img
                className="nlogo"
                src="https://i.imgur.com/ukAZTRr.png"
                alt="Light Image"
              />
            ) : (
              <img
                className="nlogo"
                src="https://i.imgur.com/Q9bl1Ys.png"
                alt="Dark Image"
              />
            )}

            <div className="ncontenedor">
              <h6 className="ndes"> {slogans[currentSloganIndex]} </h6>

              <Link to="/home">
                <div className="obra2">
                  <IconArrow tamaño={tamaño} />
                  Portafolio
                </div>
              </Link>

              <article onClick={toggleBotonesPerfil}>
                {!showperfil ? (
                  <div className="obra2">
                    <IconArrow tamaño={tamaño} />
                    Perfiles Profesionales
                  </div>
                ) : (
                  <div className="obracon">
                    <button className="obraclose">X</button>
                  </div>
                )}
              </article>

              {showperfil && (
                <>
                  <Link
                    className="obra2"
                    target="_blank"
                    to="https://www.linkedin.com/in/bryaninit/"
                  >
                    <IconLN tamaño={tamaño} /> LinkedIn
                  </Link>

                  <Link
                    className="obra2"
                    target="_blank"
                    to="https://github.com/Serphp"
                  >
                    <IconGB tamaño={tamaño} /> Github{" "}
                  </Link>
                </>
              )}

              <article onClick={toggleBotonesCompany}>
                {!showcompany ? (
                  <div className="obra2">
                    <IconArrow tamaño={tamaño} />
                    Contactar
                  </div>
                ) : (
                  <div className="obracon">
                    <button className="obraclose">X</button>
                  </div>
                )}
              </article>

              {showcompany && (
                <>
                  <Link to="/company"><div className="obra2"> 
                        <IconCompany tamaño={tamaño}/>
                        Ingresar a la web </div></Link>


                  <Link className="obra2" to="mailto:serphp@hotmail.com">
                    <IconCO tamaño={tamaño} /> Ponerse en contacto
                  </Link>
                </>
              )}

              <h6 className="ndes">Copyright © 2023 - 2024 Serphp</h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

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

function IconArrow({ tamaño }) {
  return (
    <Icon tamaño={tamaño}>
      <path d="M10 18.998a1 1 0 0 1-.77-1.64l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a.999.999 0 0 1-.83.36Z"></path>
    </Icon>
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

 <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
 <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />

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
