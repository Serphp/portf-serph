
import Jobs from "../components/Company/services";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Formulario from "../components/Company/form";
import { Navbar } from "../components";
import { Navigation, Autoplay } from "swiper/modules";

//swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Mousewheel, Pagination } from "swiper/modules";
import Contact from "../components/Company/contacto";

import { hygraph } from "../components/Projects";
import { queryPage } from "../Utils/schemas";

export default function Serphp() {
  const [show, setShow] = useState(false);
  const [proyectos, setprojects] = useState([]);
  //const [endCursor, setEndCursor] = useState(null);
  //const [hasNextPage, setHasNextPage] = useState(true);

  const handleshow = () => {
    setShow(!show);
  };

    //Second method
    useEffect(() => {
      fetchProjects();
    }, []);

    const fetchProjects = async () => {
      try {
        const { projectsConnection } = await hygraph.request(queryPage, {});
  
        // Verifica si projectsConnection existe y tiene la estructura esperada
        if (projectsConnection && projectsConnection.edges) {
          setprojects([...projectsConnection.edges.map((edge) => edge.node)]);
        } else {
          console.error("Respuesta no esperada.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    

  const Orden = proyectos.sort((a, b) => {
    // Aquí se supone que tienes una propiedad createdAt en tus objetos de proyecto
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <>
      <Navbar />
      {/* <div className="mt-5"></div> */}

      <div className="contenedorswiper">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
        >
          <SwiperSlide>
            <Swiper
              navigation={true}
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
              }}
            >
              {Orden.slice(0, 3).map((item) => (
                <SwiperSlide data-swiper-autoplay="2000">
              <img
                src={item.image.url}
                alt={item.name}
                title={item.name}
              />

                  <div className="swiper-title">
                    {item.name}
                    <a
                      href={item.url2}
                      target="_blank"
                      class="buttonp"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>

          {/* <SwiperSlide>
        <Slider/>
    </SwiperSlide> */}
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
          <SwiperSlide id="servicios">
            <Jobs />
          </SwiperSlide>
          <SwiperSlide>
            <Formulario />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
