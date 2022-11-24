import { fronted } from "../serph/fronted"
import { backend } from "../serph/backend"

export default function Experiences() {
    return (
        <>

<div className="row mt-4">
        <div className="col-md-5">
        <div className="card">
        <h3>Skills <span className="bg-success"></span></h3>
        <hr />
        <div className="card-body">
        <div className="card-text">
        <h1>Frontend</h1>
        {
            fronted.map(({language, percentage}, i) => (
                <div className="py-2" key={i}>
                    <h5> {language}</h5>
                    
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                style={{ width: `${percentage}%`}}></div>
                </div>
                </div>
            ))
                
        }
        <div className="card-text">
        <h1>Frontend</h1>
        </div>
        {
            backend.map(({language, percentage, status, icon}, index) => (
                <div className="py-2" key={index}>
                <h5> {language}</h5>
                
                <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" 
                role="progressbar" 
                style={{ width: `${percentage}%`}}></div> {/* 80% */}
                </div>
                </div>


                    ))
        }

        </div>
        </div>
        </div>        
        </div>
        <div className="col-md-7">
        <div className="card">
        <h2 class="mb-1">Experiences</h2>
        <hr/>
        <p>Descripcion</p>
        
        </div>
        </div>
        </div>

        </>
    )
};
