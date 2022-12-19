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

    const github = "https://raw.githubusercontent.com/Serphp/serph-portafolio/master";
    //const [showed, setShowed] = useState(false);

    return (
        <>

        <div class="grid2">

        <aside class="page-rightbar">
        <div class="card2">
        
        <p className="serph">Languages</p>
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\c-.png" alt="c++" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\css-3.png" alt="css" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\php.png" alt="" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\python.png" alt="" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\html-5.png" alt="" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\js.png" alt="" className="icons" />
        <p className="serph"> Database / Backend </p>
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\mysql.png" alt="" className="icons" />
        <img src="https://www.postgresql.org/favicon.ico" alt="" className="icons" />
        <img src="https://nodejs.org/static/images/logo.svg" alt="" height="80px" className="icons" />

        <p className="serph">framework</p>
        
        <img src="https://astro.build/favicon.svg" alt="" className="icons" />

        <img src="https://nextjs.org/static/favicon/safari-pinned-tab.svg" alt="" className="icons" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="icons" />
        <p className="serph">style</p>
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\tailwind.png" alt="" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\bootstrap.png" alt="" className="icons" />
        <p className="serph">Tools</p>
        <img src="https://git-scm.com/favicon.ico" alt="" width="100px" className="icons" />
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\github.png" alt="" className="icons" />
        <p className="serph"> OS </p>
        <img src="https://raw.githubusercontent.com/Serphp/serph-portafolio/master\src\icons\linux.png" alt="" className="icons" />
        <img src="https://c.s-microsoft.com/favicon.ico" alt="" className="icons" />
        </div>
            
        </aside>
        <main class="page-main">
            <div class="card2">
            <h2> Hola </h2>
            <p>Main</p>
            </div>
        </main>

        </div>

        <div className="row mt-4">
        <div className="col-md-5">
        <div className="card">
        <h2>
        ICONS 2
        </h2>


        <hr />
        
        <div id="oculted" className="card-body">
        <div id="fronted" className="card-text">
        <h1>Frontend</h1>
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
