import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"
import Proyects from "../components/Proyects"

export default function Home() {
    return (
        <>
        <div>
        {/* <h1>Home</h1> */}

        <Mensaje />
        <Cards />
        <Experiences />
        <Proyects />
        </div>
        </>
    )
  }
