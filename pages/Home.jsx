import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"

//import Proyects from "../components/Proyects"
//import Skills from "../components/Skills"



export default function Home() {
    return (
        <>
        <main>
        <div className="p-5"></div>
        {/* <div style={{'display': 'flex', 'justify-content': 'center', 'padding': '30px'}}>
        <h1 style={{'font-size': '2.8em'}}> Bryan Rodriguez </h1>
        </div>
        <p style={{'display': 'flex', 'justify-content': 'center', 'margin-top': '-40px', 'margin-left': '220px'}}> Full Stack Developer </p>        
        <hr/>
        <p style={{'display': 'flex', 'justify-content': 'center', 'margin-top': '-40px', 'margin-right': '100px'}}> SysAdmin </p>   */}

        <div className="greywrap"> 
        <p> Holaa           wadwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa wdawdw a</p></div>

        <section id="home" class="hello">
        <div className="hello-text ">
            <h2>Hola, soy Bryan </h2> 
            <h4> SysAdmin<br/> </h4>
            <h4>Web Dev <br/> </h4>
            <h4>Tecnico en sistemas</h4>
            <p>Me gusta ser creer en mi mismo.</p>
        </div>
        <div class="hello-img">
            <img src="https://pbs.twimg.com/media/FmJcezlXEAUQmTz?format=jpg&name=small" alt="" />
        </div>
    </section>

        {/* <div className="row">
            <div className="row">

            <div className="p-5"></div>

                <div className="col-md-5">
                <div className="containerx">
                
                </div>
                </div>
                
                <div className="row col-md-7">
                    <div id="spcontainer">
                        <h1>Me llamo Bryan Rodriguez</h1>
                        <section id="pinfo"> 
                        <h2>Te doy la <b>bienvenida</b> a mi portafolio!</h2>

                        </section>
                    </div>
                </div>
            </div>
        </div> */}
        
        <Cards />
        <div className="p-5"></div>
        </main>
        <Experiences />
        <Mensaje />

        </>)
}
