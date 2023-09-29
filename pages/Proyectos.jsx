import Proyects from "../components/Proyects"
import ED from "../serph/text/ED"
import GGW from "../serph/text/GGW"
import SPT from "../serph/text/SPT"

export default function Proyectos() {


    

    
    return (
        <>
        
    <h6 className="subtitle"> Proyectos </h6>
    <h2 style={{'margin-bottom': '50px', 'textAlign': 'center'}}> Personales </h2>


        <div className="edcontain">
        <ED/>
        </div>


        <div className="space"></div>
        <h1> En Desarrollo <span className="pause"> Pause </span></h1>

        <div className="ed">
            <div className="edcont">
            <h2>test</h2>
            </div>
            </div>

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
