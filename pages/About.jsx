import { fronted } from "../serph/fronted";
import { backend } from "../serph/backend";

export default function About() {

    function done(){
        document.getElementById("oculted").style.display = "block";
    }

    const showall = () => {
        done();
        document.getElementById("fronted").style.display = "block";
        document.getElementById("backend").style.display = "block";
    }

    const showFronted = () => {
        done();
        document.getElementById("fronted").style.display = "block";
        document.getElementById("backend").style.display = "none";
    }

    const showBackend = () => {
        done();
        document.getElementById("fronted").style.display = "none";
        document.getElementById("backend").style.display = "block";
    }


    const github = "https://raw.githubusercontent.cortafolio/master";
    //const [showed, setShowed] = useState(false);

    return (
        <>

        <h1> Acerca de mi </h1>
        <div className="row mt-4">
        <div className="col-md-5">
        <div className="card2">

        <section className="Acontainer">
        <button className="Abutton" onClick={showall}> Todos </button>
        <button className="Abutton" onClick={showFronted} > Frontend </button>
        <button className="Abutton" onClick={showBackend} > Backend </button>
        </section>

        <hr />
            
            <div id="oculted" className="card-body">
            <div id="fronted" className="card-text">
            <div className=""> 
        <h1>Frontend</h1>

        </div>
        {
            fronted.map(({language, percentage}, i) => (
                <div className="py-2" key={i}>
                    <h5> {language}</h5>
                    
                <div className="progress-bar">
                <div className="progress-bar-percent" style={{ width: `${percentage}%`}}></div>
                </div>
                </div>
            ))
                
        }
        </div> 
        <div id="backend" className="card-text">
        <div className="size"> 
        <h1>Backend</h1>
        {
            backend.map(({language, percentage, status, icon}, index) => (
                
                <div className="py-2" key={index}>
                <h5> {language}</h5>
                
                <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" 
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
        
        </div>        

        
        <div className="col-md-7">
        <h1>Experiences</h1>
        <hr/>
        <div className="content1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut dolores quos, consequatur a, doloribus, tenetur voluptatibus voluptate fugiat aliquid reprehenderit dolorem laborum sed corrupti suscipit distinctio magni illum id.</p>
        
        </div>
        
        </div>
        
        </div>
        
        </>
    )
}