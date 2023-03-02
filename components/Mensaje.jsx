
import { heroes } from '../serph/heroes';
import { useState } from "react";

export default function Mensaje() {

    function getHeroeRandom() {
        return Math.floor(Math.random() * heroes.length);
    }
    //const getHeroeRandom = () => math.floor(math.random() * heroes.length);
    const [heroe, setHeroe] = useState(heroes[getHeroeRandom()]);
    //console.log(heroe);

    const changeHeroe = () => {
        setHeroe(heroes[getHeroeRandom()]);
    }

    function updateHeroes() {
        setHeroe(heroes[getHeroeRandom()]);
    }
    setInterval(updateHeroes, 20000)


    return (
        <>

        <hr/>
            <div className="mainbgg card3 m-5" style={{ textAlign: "center"}}>
            <h2 className='mb-3'> {heroe.name} </h2>
            <h6 className="subtitle"> {heroe.mensaje} </h6>
            <br/>
            <figcaption className="blockquote-footer">
            Por <cite title="Source Title"> {heroe.name} </cite>
            </figcaption>
            </div>
            <div class="mensaje-bar"></div>
        <hr/>

        </>
        )
};
