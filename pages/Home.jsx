//import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"
import { useState } from "react";
import Education from "../components/education";
import Jobs from "../components/services";
import Proyects from "../components/Proyects";
import Formulario from "../components/form";

export default function Home() {

    const [show, setShow] = useState(false);

    const handleshow = () => {
        setShow(!show);
    }

    // const canvasRef = useRef(null);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');
    
    //     context.font = "24px Arial";
    //     context.fillStyle = "#FFF";
    //     context.textAlign = "left";
    //     context.fillText(" Welcome \n", 20, 20);
    //     context.fillText("  \n  ", 20, 0);
    //     context.fillText("  /\\___/\\", 20, 30);
    //     context.fillText("/         \\", 30, 60);
    //     context.fillText(" |  u   u  |", 20, 90);
    //     context.fillText(" |   =^=   |", 20, 120);
    //     context.fillText(" >  -<> -  <", 20, 150);
    //     context.fillText(" /_/       \\_\\", 20, 180);
    //   }, []);

    const page = "https://www.canva.com/design/DAFdbVwPc-E/g-n9jiBMoC2BnVRAgrTaOQ/view?utm_content=DAFdbVwPc-E&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu";
    const page2 = "https://www.canva.com/design/DAFYcnkgTq0/2ZDE5Ktbf3zjRHRCyvbHow/view?utm_content=DAFYcnkgTq0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu";
    return (
        <>
        <main>
        <header className="">
        <section className="home">
            <div className="name">
                <h6 className="subtitle" style={{'textAlign':'left'}}>Bienvenido a mi portfolio.</h6>
                <h1 className="title">Bryan</h1>
                <h1 className="title">Rodriguez</h1>
                <p></p>
                <h4 style={{'textAlign':'left'}}>
                SysAdmin | Web Developer | Técnico IT
                </h4>

                <div className="pt-3">
                {/* <a href={page} target="_blank"><button className="buttoned"> SysAdmin CV </button></a> */}
                <a href={page2} target="_blank"><button className="buttoned"> 
                <i className="fa fa-user-tie"></i>
                Curriculum Vitae 
                </button></a>

                </div>      

                <div className="mt-4">
                    <a className="btn btn-link btn-floating " target="_blank" href="https://twitter.com/Serphp">
                    <i className="fab fa-twitter"></i></a>

                    <a className="btn btn-link btn-floating ms-2" target="_blank" href="https://www.linkedin.com/in/bryaninit/">
                    <i className="fab fa-linkedin"></i></a>

                    <a className="btn btn-link btn-floating ms-2" target="_blank" href="https://github.com/Serphp">
                    <i className="fab fa-github"></i></a>

                    <a className="btn btn-link btn-floating ms-2" href="mailto:serphp@hotmail.com">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m22.08 7.892-9.74-4.813a.767.767 0 0 0-.68 0L1.923 7.892a.75.75 0 0 0-.422.67V20.25a.754.754 0 0 0 .759.75h19.48a.756.756 0 0 0 .759-.75V8.563a.75.75 0 0 0-.42-.671ZM12 4.588l8.11 4.006-8.237 4.067-8.109-4.005L12 4.588Z"></path>
                    </svg></a>
                </div>
            </div>        
            <div className="about">

            <div className="extras">
                <h4> Ciudad de panamá </h4>
                <h4><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1200px-Flag_of_Panama.svg.png" width={30}/> Panamá </h4>
            </div>

            <h1> Acerca de mi </h1>
            <p>
                Hola, soy programador me distingo por ser una persona sencilla, entusiasta en la creación e innovación de proyectos y el aprendizaje constante.  🐱‍👤
                <div className="mt-3"></div>
                <button className="btnshow" onClick={handleshow}> 
                {
                    show ? "Ocultar" : "Leer más"
                } 
                </button>
                <section className={show ? "show" : "hide"}>
    
                <p>Mi trayectoria en este campo comienza a la edad de 14 años, cuando comencé a explorar el mundo de la programación a través de la creación de páginas web utilizando HTML, donde se me enseño en la escuela por una profesora de informática, lo que despertó mi curiosidad y me impulsó a sumergirme en este fascinante campo.
                    <div className="mt-3"></div>
                    A medida que crecía en edad, me comenzó a encantar las nuevas tecnologías, no solo los lenguajes de programación, sino también como funcionaba la computadora en donde programaba y todo lo que requería una conexión a internet.
                    <div className="mt-3"></div>
                    Mis principales habilidades interpersonales, que me han ayudado en este campo, es mi capacidad de resiliencia y paciencia. Poseo una destreza basada en constante aprendizaje en el manejo y resolución de errores, lo que me contribuye a mantener una alta calidad y amor por mis proyectos con una constante mejora cada cierto tiempo. Además, mi habilidad para organizar eficientemente mis tareas y mi capacidad para detallar las cosas de manera clara y comprensible basados en diagramas o dibujos. Mi enfoque innovador, creativo y curioso se refleja en mi por ser una persona muy profunda en todo lo que hago. 
                    </p>
    
                </section>
                <div className="mt-3"></div>
                Mi lema actual y la que llevare acabo hasta el final, <b>Nunca rendirse.</b>
            </p>

            <div className="extras">
                <h4> Lenguajes </h4>
                <h4> Español, ingles </h4>
            </div>

            </div>     

            </section>  
            </header>
            
            <Education/>

            <div className="mt-5"></div>

            <Cards />

            <Experiences />

    {/* <div className="mainbg">
            <h6 className="subtitle"><i className="fa fa-location-arrow"></i> Mas información </h6>
        <h2> Contacto </h2>
        <div className="mb-5"></div>

        <div className="educont">
            <div className="edu3">
                Correo: <br/>
                <a href="mailto:Serphp@hotmail.com">Serphp@hotmail.com</a>
            </div>
            <div className="edu3">
                País <br/>
                Ciudad de Panamá
            </div>
            <div className="edu3">
                test3
            </div>
        </div>
    </div> */}

    {/* <Jobs/> */}

    <Proyects/>

    {/* <Formulario/> */}
            </main>
        </>)
}
