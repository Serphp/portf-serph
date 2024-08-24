import { useSwiperSlide } from "swiper/react";

import Jobs from "../components/Company/services";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Formulario from "../components/Company/form";
import { Navbar } from "../components";
import { Navigation, Autoplay } from "swiper/modules";
import { NProyects } from "../serph/NProyects";
//swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Mousewheel, Pagination } from "swiper/modules";
import Contact from "../components/Company/contacto";
import Slider from "../components/Company/slider";

export default function Serphp() {
  const [show, setShow] = useState(false);
  //const swiperSlide = useSwiperSlide();
  const handleshow = () => {
    setShow(!show);
  };

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
              {NProyects.slice(0, 3).map((item) => (
                <SwiperSlide data-swiper-autoplay="2000">
                  <img src={item.image} alt={item.name} title={item.name} />

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
