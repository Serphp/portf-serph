
import { heroes } from '../serph/heroes';
import { useState } from "react";

export default function Mensaje() {
    const [heroe, setHeroe] = useState(heroes[getHeroeRandom()]);

    function getHeroeRandom() {
        return Math.floor(Math.random() * heroes.length);
    }
    // const changeHeroe = () => {
    //     setHeroe(heroes[getHeroeRandom()]);
    // }

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
            <div className="mensaje-bar"></div>
        <hr/>

        </>
        )
};
