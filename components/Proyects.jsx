import { NProyects } from "../serph/NProyects"

export default function Proyects() {
    return (
        <>
        <div className="row mt-4">
            <div className="">
                <div className="">
                    <div className="row">
                        <div className="logo"><h1>PROYECTOS</h1></div>
            {
                NProyects.map((proyect, index) => ( 
                    <div className="cardbody2" key={index}>
                        <div className="cardre">
                        <img className="image" src={proyect.image} alt="" />
                            <div className="cardinfo">
                            <h1> {proyect.name} </h1>
                            <hr/>
                            <p> {proyect.description} </p>
                            <a href={proyect.url} className="ae">View </a>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            </div>
            </div>
            </div>
        </>
    )
};
