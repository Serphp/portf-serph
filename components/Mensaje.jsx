import { heroes } from "../serph/heroes"
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

    return (
        <>
            <div className="card">
            <h2> {heroe.name} </h2>
            <p> {heroe.mensaje} </p>
            <figcaption class="blockquote-footer">
            Por <cite title="Source Title"> {heroe.name} </cite>
            </figcaption>
            </div>
        </>
           )
};
