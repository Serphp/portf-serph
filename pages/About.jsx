import Projects from "../components/Projects"
import { Navbar } from "../components"


export default function About() {

    return (
        <>
        <Navbar/>

        <div className="mainbg">
            <h6 className="subtitle"><i className="fa fa-location-arrow"></i> Proyectos </h6>
        <h2> Proyects </h2>
        <h6> Puedes visualizar la imagen completa manteniendo oprimido la imagen.</h6>
        <div className="mb-5"></div>

        <Projects/>
        
        </div>


        </>

    )
}
