import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"

//import Proyects from "../components/Proyects"
//import Skills from "../components/Skills"



export default function Home() {
    return (
        <>
        <main>
        <header class="header2" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">Bienvenido a mi portfolio.</h6>
                <h1 class="title">Bryan Rodriguez</h1>
                <p>SysAdmin | Web Developer | Técnico IT</p>

                <div class="buttons pt-3">
                    <button class="buttoned"> <a href="mailto:serphp@hotmail.com"></a> CONTACTAME</button>
                    <button class="buttoned">DOWNLOAD CV</button>
                </div>      

                <div class="socials mt-4">
                    <a className="btn btn-link btn-floating m-1" target="_blank" href="https://twitter.com/Serphp">
                    <i className="fab fa-twitter"></i></a>


                    <a className="btn btn-link btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/bryaninit/">
                    <i class="fab fa-linkedin"></i></a>

                    <a className="btn btn-link btn-floating m-1" target="_blank" href="https://github.com/Serphp">
                    <i className="fab fa-github"></i></a>
                </div>
            </div>              
            <div class="img-holder">
                <img src="https://pbs.twimg.com/media/Fpe8OdhXgAEjp--?format=jpg&name=medium" alt="" />
            </div>      
        </div>  
        </header>
        
        <Cards />
        </main>
        <Experiences />
        <Mensaje />

        </>)
}
