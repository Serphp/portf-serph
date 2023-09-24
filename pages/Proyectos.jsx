import Proyects from "../components/Proyects"
import ED from "../serph/text/ED"
import GGW from "../serph/text/GGW"
import SPT from "../serph/text/SPT"

export default function Proyectos() {


    

    
    return (
        <>
        
    <h6 className="subtitle"> Proyectos </h6>
    <h2 style={{'margin-bottom': '50px', 'textAlign': 'center'}}> Personales </h2>

    {/* Section Proyect Tops
     */}


    <div className="section-link">
    <h1> Big Project's </h1>
    <a href="https://github.com/Serphp" target="_blank">
    <h2 className="link"> 
    <svg width="30" height="30" className="link" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path>
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
            </svg>
            /Repositorios</h2>
    </a>
    </div>

    <section className="section-container-top">
        <article className="section-top parallax" data-speed="2">
            <div className="text-container">
                <div className="top-cont-title">
                <a href='https://github.com/Serphp/GunGaleWorld' target="_blank" className="buttonp">Github</a>
                <h2 className='ttitle'> GunGale World </h2>
                </div>
                
                    <GGW />
            </div>
        </article>

        <article className="section-top">
            <div className="text-container">
                <div className="top-cont-title">
                <a href='https://spomodoro-serphp.vercel.app/' target="_blank" className="buttonp">View</a>
                    <h2 className='ttitle'> SPomodoro </h2>
                    
                </div>
                
                <SPT/>
            </div>
        </article>

        </section>

        <h1> New section </h1>
        <section className="edall">
        <ED/>
        </section>


        {/* <article className="ed">
            <div className="text-container">
                <div className="top-cont-title">
                <a href='https://spomodoro-serphp.vercel.app/' target="_blank" className="buttonp">View</a>
                    <h2 className='ttitle'> ED Panama </h2>
                    
                </div>
                <ED/>
                
            </div>
        </article> */}

        <div className="space"></div>
        <h1> En Desarrollo <span className="pause"> Pause </span></h1>

        <article className="dev">

            <p style={{marginBottom: '10px'}}>
                El desarrollo de estos proyectos son de largo plazo, la documentacion de cada proyecto se encuentra en desarrollo y se ira actualizando con el tiempo.
                </p>
                <ul>
                    <li><a href="https://github.com/Serphp/SI2" target="_blank"><h4>[Github] Proyecto SI2</h4></a></li>
                    <ul>
                        <li style={{marginBottom: '10px'}}> Tecnologias: <b> NextJS, Typescript, NextAuth, Prisma, Tailwind, SASS  </b></li>
                    </ul>
                    <li><a href="https://github.com/Serphp/SI" target="_blank"><h4>[Github] Proyecto SI</h4></a></li>
                    <ul style={{marginBottom: '10px'}}>
                        <li> Tecnologias: <b> Angular 16, Typescript, SASS  </b></li>
                    </ul>
                    <li><a href="https://github.com/Serphp/SerphGenPass" target="_blank"><h4>[Github] Proyecto Django</h4></a></li>
                    <ul style={{marginBottom: '10px'}}>
                        <li> Tecnologias: <b> Python, Django  </b></li>
                    </ul>
                </ul>
                
                
        </article>

        {/* <div className="section-top">
            <div className="text-container">
                <div className="top-cont-title">
                <a href='/' target="_blank" className="buttonp">View</a>
                    <h2 className='ttitle'> GunGale World </h2>
                </div>
                <p className='top-description'> 
                Gun Gale World el proyecto mas grande en el que he abarcado millones de horas de trabajo, 
                donde he aprendido muchisimo, 
                desde el diseño, la programación, la administración, la gestión, 
                </p>
                <div className="top-cont-title ">
                    <span className="tlinks"> Duración 4 años </span>
                    <span className="tlinks">2016 - 2020</span>
                </div>
            </div>
        </div> */}


    <div className="space"></div>

    <h1> Normal Project's </h1>

        <Proyects />
        </>
        
    )
};
