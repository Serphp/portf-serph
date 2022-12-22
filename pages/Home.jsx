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
            <h1> Soy Full Stack 2 </h1>
            <hr/>
                <div className="col-md-5">
                
                <img src="https://i.imgur.com/4SdB78W.gif" class="img-fluid" alt="" />
                </div>
                
                <div className="row col-md-7">
                    
                    <p className="">Me llamo Bryan Rodriguez</p>
                </div>
            </div>
        </div>

        <Cards />
        <Experiences />
        <Mensaje />

        </>)
}
