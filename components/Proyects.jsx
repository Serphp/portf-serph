import { NProyects } from "../NProyects"

export default function Proyects() {
    return (
        <>
        <div className="row mt-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Proyectos</h1>
                        </div>
            {
                NProyects.map((proyect, index) => ( 
                    <div className="col-md-4" key={index}>
                    <div className="card">
                    <img src={NProyects.image} alt="" />
                    <div className="card-body">
                    <h1> {NProyects.name} </h1>
                    <hr/>
                    <p> {NProyects.description} </p>
                    <a href={NProyects.url} className="ae">View </a>
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
