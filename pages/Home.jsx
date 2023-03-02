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
                <h6 class="subtitle" style={{'textAlign':'left'}}>Bienvenido a mi portfolio.</h6>
                <h1 class="title">Bryan</h1>
                <h1 class="title">Rodriguez</h1>
                <p></p>
                <h6 class="subtitle" style={{'textAlign':'left'}}>
                SysAdmin | Web Developer | Técnico IT
                </h6>

                <div class="buttons pt-3">
                <button class="buttoned"> <a href="mailto:serphp@hotmail.com"> CONTACTAME </a> </button>
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
                <img src="https://media.licdn.com/dms/image/D4E03AQFVakegPgSg7A/profile-displayphoto-shrink_800_800/0/1676919483085?e=1683158400&v=beta&t=qtGDekgtXY8DG9W_EmBbosoOVsP1krpklXQCIqk7r64" alt="" />
            </div>      
        </div>  
        </header>
        
        <Cards />
        </main>
        <Experiences />
        <Mensaje />

        </>)
}
