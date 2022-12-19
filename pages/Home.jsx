import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"
//import Proyects from "../components/Proyects"
import Skills from "../components/Skills"


export default function Home() {
    return (
        <>
        
        <div className="">
            <div className="row">
                <div className="col-md-5">
                    <img src="https://i.imgur.com/4SdB78W.gif" class="img-fluid" alt="" />
                </div>
                
                <div className="row col-md-7">
                    <h2> Soy Full Stack </h2>
                    <p className="">Me llamo Bryan Rodriguez</p>
                </div>
            </div>
        </div>
 
        <Cards />
        <Experiences />
        <Mensaje />

        </>)
  }
