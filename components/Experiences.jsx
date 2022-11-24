import { skills } from "../serph/skills"

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
            skills.map(({language, percentage, status, icon}, i) => (
                <div className="py-3" key={i}>
                    <h5> {language}</h5>
                    
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100" 
                style={{ width: `${percentage}%`}}></div>
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
