import { fronted } from "../serph/fronted";
import { backend } from "../serph/backend";
import '../src/styles/Skills.scss'

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

    const toggles = document.querySelectorAll('.faq-toggle')
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
    })

    const github = "https://raw.githubusercontent.cortafolio/master";
    //const [showed, setShowed] = useState(false);

    return (
        <>

        <h1> Acerca de mi </h1>


    <h1>Frequently Asked Questions</h1>
<div class="faq-container">
    <div class="faq active">
    <h3 class="faq-title">
        Why shouldn't we trust atoms?
    </h3>

    <p class="faq-text">
        They make up everything
    </p>

    <button class="faq-toggle">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
    </button>
    </div>

    </div>

        <main className="mainbg"> 
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
            <section className="skillhide"> 
        <h1>Frontend</h1>
        {/* SKILL CONTAIN */}
        {
            fronted.map(({language, percentage}, i) => (
                <div className="section1" key={i}>
                <div> {language}</div>
                <div className="progress-bar">
                <div className="progress-bar-percent" style={{ width: `${percentage}%`}}></div>
                </div>
                </div>
            ))
                
        }
        </section>
        <div id="backend">
        <section className="skillhide"> 
        {/* <h1>Backend</h1> */}
        {
            backend.map(({language, percentage}, index) => (
                <div className="section2" key={index}>
                <h5> {language}</h5>
                <div className="progress-bar">
                <div className="progress-bar-percent" style={{ width: `${percentage}%`}}></div>
                </div>
                </div>
            ))
        }
        </section>
        {/* SKILL CONTAIN */}
        </div>
        </div>
        </div>
        </div>        
        </div>
        
        <div className="col-md-7">
        <h1>Experiences</h1>
        <hr/>
        <div className="content1">
        <p style={{'font-size': '1.5em'}}> Hola </p>
        
        </div>
        
        </div>
        
        </div>
        </main>
        </>
    )
}