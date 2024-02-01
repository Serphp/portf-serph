import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { fronted } from "../serph/fronted";
// import { backend } from "../serph/backend";
import '../src/styles/slider.scss';

export function Columna(){
    return(
        <>
        <div className="contenedor">
        <div className="container px-4">
        <div className="row gx-5">
            <div className="col">
            <div className="p-3 border">Custom column padding</div>
            </div>
            <div className="col">
            <div className="p-3 border">Custom column padding</div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default function About() {

    return (
        <>
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

        </>

    )
}
