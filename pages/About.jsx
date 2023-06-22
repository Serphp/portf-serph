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
<div className="faq-container">
    <div className="faq active">
    <h3 className="faq-title">
        Why shouldn't we trust atoms?
    </h3>

    <p className="faq-text">
        They make up everything
    </p>

    <button className="faq-toggle">
        <i className="fas fa-chevron-down"></i>
        <i className="fas fa-times"></i>
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

        <div className="container-lang">
<div className="clang">

<section className="tcontainer ">
<h6 className="subtitle"> Languages </h6>
    <img className="conteinericon" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/c-3670A0?style=for-the-badge&logo=c&logoColor=ffdd54" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/python_2-3-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="" />
    
<h6 className="subtitle"> Database </h6>
    <img className="conteinericon" src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
<h6 className="subtitle"> Back-end </h6>
    <img className="conteinericon" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
    <img className="conteinericon" src="https://img.shields.io/badge/php_8+-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="" />
</section>


</div> 

<div className="clang">
<section className="tcontainer">
<p className="serph">style</p>
<h6 className="subtitle"> Styles </h6>
<img className="conteinericon" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" title="CSS3" />
<img className="conteinericon" src="https://img.shields.io/badge/bootstrap_4+-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" title="Bootstrap" />
<img className="conteinericon" src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white" title="Chakra" />
<img className="conteinericon" src="https://img.shields.io/badge/bulma-00d1b2.svg?style=for-the-badge&logo=bulma&logoColor=white" title="Bulma CSS" />
<img className="conteinericon" src="https://img.shields.io/badge/Tailwind-0b1121.svg?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8" title="Chakra" />

<h6 className="subtitle"> Front-end </h6>
<img className="conteinericon" src="https://img.shields.io/badge/react_16+-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" title="React" />
<img className="conteinericon" src="https://img.shields.io/badge/React_Router_6.4+-CA4245?style=for-the-badge&logo=react-router&logoColor=white" title="React Router" />
<img className="conteinericon" src="https://img.shields.io/badge/React_redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" title="React" />
<img className="conteinericon" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" title="NextJS" />

<h6 className="subtitle"> System Operative </h6>
<img className="conteinericon" src="https://img.shields.io/badge/Windows_11-_10-01adef?style=for-the-badge&logo=Windows&logoColor=white" title="Windows 11-7" />
<img className="conteinericon" src="https://img.shields.io/badge/Kali_Linux-357bf1?style=for-the-badge&logo=kali-linux&logoColor=white" title="Kali Linux 19+" />
<img className="conteinericon" src="https://img.shields.io/badge/Arch_Linux-1793d1?style=for-the-badge&logo=arch-linux&logoColor=white" title="Arch Linux" />
<img className="conteinericon" src="https://img.shields.io/badge/Linux-white?style=for-the-badge&logo=linux&logoColor=e7b311" title="Linux" />

<h6 className="subtitle"> Tools </h6>
<img className="conteinericon" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" title="Figma" />
<img className="conteinericon" src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" title="AdobeXD" />
<img className="conteinericon" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" title="Docker" />
<img className="conteinericon" src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" title="Markdown" />

</section>
</div> 
</div> 
        </main>
        </>
    )
}

