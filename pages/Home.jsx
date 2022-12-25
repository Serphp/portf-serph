import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"
//import Proyects from "../components/Proyects"
import Skills from "../components/Skills"



export default function Home() {
    return (
        <>
        
        <div className="row">
            <div className="row">
            <h1> Soy un gato </h1>
            <hr/>
                <div className="col-md-5">
                
                <img src="https://i.imgur.com/4SdB78W.gif" className="img-fluid" alt="" />
                </div>
                
                <div className="row col-md-7">
                    <div id="spcontainer">
                        <p>Me llamo Bryan Rodriguez</p>
                        <section id="pinfo"> 
                        <p>Te doy la <b>bienvenida</b> a mi portafolio!</p>

                        </section>
                    </div>
                </div>
            </div>
        </div>

        <Cards />
        <Experiences />
        <Mensaje />

        </>)
}
