
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { queryPage } from '../../Utils/schemas';
import { hygraph } from '../../Utils/hygraph.server';

export default function Slider() {

    const [proyectos, setprojects] = useState([]);

    //Second method
    useEffect(() => {
    fetchProjects();
}, []);

const fetchProjects = async () => {
    try {
    const { projectsConnection } = await hygraph.request(queryPage, {
    });

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
    
    console.log(Orden);
    
    return (
    <>
    <div className="mainbgs">

    <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
        >
        <div
            slot="container-start"
            className="parallax-bg"
            style={{
            'background-image':
                'url(https://swiperjs.com/demos/images/nature-1.jpg)',
            }}
            data-swiper-parallax="-23%"
        ></div>

            {
                Orden.map((project, i) => (
                    <>
                <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                Slide 1
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                <p>
                    {project.description}
                </p>
                </div>
                </SwiperSlide>
                    </>
                ))
            }
        </Swiper>

    </div>
    </>
    );
    }