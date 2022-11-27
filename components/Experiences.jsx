import { fronted } from "../serph/fronted"
import { backend } from "../serph/backend"

export default function Experiences() {
    const png = `.png`;

    function showFronted() {
        if (document.getElementById("oculted").style.display === "block"){
        document.getElementById("fronted").style.display = "none";
        document.getElementById("backend").style.display = "block"; 
        }

    }

    function ocultbk() {
        if (document.getElementById("oculted").style.display = "block") {
        document.getElementById("backend").style.display = "none";
        document.getElementById("fronted").style.display = "block";
        }
    }

    function showAll() {
        if (document.getElementById("oculted").style.display === "block") 
        {
            document.getElementById("fronted").style.display = "block";
            document.getElementById("backend").style.display = "block";
        } else if (document.getElementById("oculted").style.display === "none") {
            document.getElementById("fronted").style.display = "none";
            document.getElementById("backend").style.display = "none";
        }
    
    }

    //const [showed, setShowed] = useState(false);

    return (
        <>

        <div className="row mt-4">
        <div className="col-md-5">
        <div className="card">
        <h2>
        ICONS 2
        </h2>
        <div className="skills">
        <p className="serph">Languages</p>
        <img src=".\src\icons\c-.png" alt="c++" className="icons" />
        <img src=".\src\icons\css-3.png" alt="css" className="icons" />
        <img src=".\src\icons\php.png" alt="" className="icons" />
        <img src=".\src\icons\python.png" alt="" className="icons" />
        <img src=".\src\icons\html-5.png" alt="" className="icons" />
        <img src=".\src\icons\js.png" alt="" className="icons" />
        <p className="serph"> Database / Backend </p>
        <img src=".\src\icons\mysql.png" alt="" className="icons" />
        <img src="https://www.postgresql.org/favicon.ico" alt="" className="icons" />
        <img src="https://nodejs.org/static/images/logo.svg" alt="" height="80px" className="icons" />

        <p className="serph">framework</p>
        
        <img src="https://astro.build/favicon.svg" alt="" className="icons" />
        <span className="texticon"> astro1 </span>
        <img src="https://nextjs.org/static/favicon/safari-pinned-tab.svg" alt="" className="icons" />
        <span className="texticon"> astro2 </span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="icons" />
        <p className="serph">style</p>
        <img src=".\src\icons\tailwind.png" alt="" className="icons" />
        <img src=".\src\icons\bootstrap.png" alt="" className="icons" />
        <p className="serph">Tools</p>
        <img src="https://git-scm.com/favicon.ico" alt="" width="100px" className="icons" />
        <img src=".\src\icons\github.png" alt="" className="icons" />
        <p className="serph"> OS </p>
        <img src=".\src\icons\linux.png" alt="" className="icons" />
        <img src="https://c.s-microsoft.com/favicon.ico" alt="" className="icons" />
        </div>

        <p class="serph"><input type="submit" value="All" onClick={showAll}></input></p>
        <p class="serph"><input type="submit" value="Fronted" onClick={showFronted}></input></p>
        <p class="serph"><input type="submit" value="Backed" onClick={ocultbk}></input></p>

        <hr />
        
        <div id="oculted" className="card-body">
        <div id="fronted" className="card-text">
        <h1>Frontend</h1>
        {
            fronted.map(({language, percentage}, i) => (
                <div className="py-2" key={i}>
                    <h5> {language}</h5>
                    
                <div class="progress">
                <div class="progress-bar progress-bar-striped bg-info" 
                role="progressbar" 
                style={{ width: `${percentage}%`}}></div>
                </div>
                </div>
            ))
                
        }
        </div> 
        <div id="backend" className="card-text">
        <h1>Backend</h1>
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
        <div className="pcard">
        <h2 class="mb-1">Experiences</h2></div>
        <hr/>
        <div className="card2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut dolores quos, consequatur a, doloribus, tenetur voluptatibus voluptate fugiat aliquid reprehenderit dolorem laborum sed corrupti suscipit distinctio magni illum id.</p>
        
        </div>
        </div>
        </div>
        
        </>
    )
};
