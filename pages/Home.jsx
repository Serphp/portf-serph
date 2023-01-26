import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"

//import Proyects from "../components/Proyects"
//import Skills from "../components/Skills"



export default function Home() {
    return (
        <>
        <main>


        <section class="hello">
            <div className="hello-text">
                <h1 style={{'textAlign': 'center'}}>Hola, soy Bryan </h1> 
                <h4> SysAdmin | Web Dev | Tecnico en sistemas</h4>
            </div>
            <div class="hello-img">
            <img src="https://media.licdn.com/dms/image/D4E03AQHk5VD69aRJGg/profile-displayphoto-shrink_800_800/0/1674619813456?e=1680134400&v=beta&t=ui5a91ZP2C0fZmH0syj_WEKSG8RNlgmTjgzOeDJZJQ8" alt="" />
            </div>
        </section>
        {/* <section class="hello">
            <div class="hello-text">
                <p>Sobre mi</p>
            </div>
        </section> */}
        
        <Cards />
        </main>
        <Experiences />
        <Mensaje />

        </>)
}
