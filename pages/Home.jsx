//import Mensaje from "../components/Mensaje"
import Experiences from "../components/Experiences"
import Cards from "../components/Cards"
import { useRef, useEffect } from 'react';

export default function Home() {

    // const canvasRef = useRef(null);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');
    
    //     context.font = "24px Arial";
    //     context.fillStyle = "#FFF";
    //     context.textAlign = "left";
    //     context.fillText(" Welcome \n", 20, 20);
    //     context.fillText("  \n  ", 20, 0);
    //     context.fillText("  /\\___/\\", 20, 30);
    //     context.fillText("/         \\", 30, 60);
    //     context.fillText(" |  u   u  |", 20, 90);
    //     context.fillText(" |   =^=   |", 20, 120);
    //     context.fillText(" >  -<> -  <", 20, 150);
    //     context.fillText(" /_/       \\_\\", 20, 180);
    //   }, []);

    const page = "https://www.canva.com/design/DAFdbVwPc-E/g-n9jiBMoC2BnVRAgrTaOQ/view?utm_content=DAFdbVwPc-E&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu";
    const page2 = "https://www.canva.com/design/DAFYcnkgTq0/2ZDE5Ktbf3zjRHRCyvbHow/view?utm_content=DAFYcnkgTq0&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu";
    return (
        <>
        <main>
        <header class="header2" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle" style={{'textAlign':'left'}}>Bienvenido a mi portfolio.</h6>
                <h1 class="title">Bryan</h1>
                <h1 class="title">Rodriguez</h1>
                <p></p>
                <h4 class="" style={{'textAlign':'left'}}>
                SysAdmin | Web Developer | Técnico IT
                </h4>

                <div class="pt-3">
                <a href={page} target="_blank"><button class="buttoned"> SysAdmin CV </button></a>
                <a href={page2} target="_blank"><button class="buttoned"> WebDev CV </button></a>

                </div>      

                <div class="mt-4">
                    <a className="btn btn-link btn-floating m-1" target="_blank" href="https://twitter.com/Serphp">
                    <i className="fab fa-twitter"></i></a>


                    <a className="btn btn-link btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/bryaninit/">
                    <i class="fab fa-linkedin"></i></a>

                    <a className="btn btn-link btn-floating m-1" target="_blank" href="https://github.com/Serphp">
                    <i className="fab fa-github"></i></a>

                    <a className="btn btn-link btn-floating m-1" href="mailto:serphp@hotmail.com">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m22.08 7.892-9.74-4.813a.767.767 0 0 0-.68 0L1.923 7.892a.75.75 0 0 0-.422.67V20.25a.754.754 0 0 0 .759.75h19.48a.756.756 0 0 0 .759-.75V8.563a.75.75 0 0 0-.42-.671ZM12 4.588l8.11 4.006-8.237 4.067-8.109-4.005L12 4.588Z"></path>
                    </svg></a>
                </div>
            </div>        

        <div class="img-holder">
            <img src="https://media.licdn.com/dms/image/D4E03AQFVakegPgSg7A/profile-displayphoto-shrink_800_800/0/1676919483085?e=1689206400&v=beta&t=o8pPRjPuacy0nTSVw_poNAl34mbMLBk6G6mqKCtDMJ0" alt="" class="img-fluid"/>
        </div>     

        </div>  
        </header>
        
        <Cards />
        </main>
        <Experiences />

        <script>
        <script type="module" src="../src/anim/anim"></script>

        </script>
        </>)
}
