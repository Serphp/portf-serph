import { useSwiperSlide } from 'swiper/react';

import Jobs from "../components/Company/services";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Formulario from "../components/Company/form";
import { Navbar } from "../components";
import { Navigation, Autoplay } from 'swiper/modules';
import { NProyects } from '../serph/NProyects';
//swiper

import { Mousewheel, Pagination } from 'swiper/modules';
import Contact from '../components/Company/contacto';

export default function Serphp() {

    const [show, setShow] = useState(false);
    const swiperSlide = useSwiperSlide();
    const handleshow = () => {
        setShow(!show);
    }

    return (
        <>
        <Navbar/>
        <div className="mt-5"></div>

    <Swiper
    direction={'vertical'}
    slidesPerView={1}
    spaceBetween={30}
    mousewheel={true}
    pagination={{
        clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    className="mySwiper"
    >
    <SwiperSlide>
        
    <Swiper navigation={true} 
        modules={[Autoplay, Navigation]} 
        autoplay={{ 
            delay: 5000,
            pauseOnMouseEnter: true,
        }}
        className="mySwiper">
        {
            NProyects.slice(0,3).map((item) => (
                <SwiperSlide data-swiper-autoplay="2000">
                    <img src={item.image} alt={item.name} title={item.name}/>
                    <div className='swiper-title'>{item.name}</div>
                </SwiperSlide>
            ))
        }
    </Swiper>

    </SwiperSlide>
    <SwiperSlide>
        
    <Jobs/>

    </SwiperSlide>
    <SwiperSlide>

        <Formulario/>

    </SwiperSlide>
    <SwiperSlide>

        <Contact/>

    </SwiperSlide>

    </Swiper>

    </>
    )
}
