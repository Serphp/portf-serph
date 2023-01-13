import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"

//import Proyects from "../components/Proyects"
//import Skills from "../components/Skills"



export default function Home() {
    return (
        <>
        <main>


        <section id="home" class="hello">
        <div className="hello-text ">
            <h1 style={{'textAlign': 'center'}}>Hola, soy Bryan </h1> 
            <h4> SysAdmin | Web Dev | Tecnico en sistemas</h4>
            <p>Yo creo, que todos podemos lograr grandes cosas, si nos proponemos hacerlo.</p>
        </div>
        <div class="hello-img">
            <img src="https://pbs.twimg.com/media/FmJcezlXEAUQmTz?format=jpg&name=small" alt="" />
        </div>
    </section>
        
        <Cards />
        <div className="p-5"></div>
        </main>
        <Experiences />
        <Mensaje />

        </>)
}
