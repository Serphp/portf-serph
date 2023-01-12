//import { NProyects } from '../../serph/NProyects'
import '../src/styles/Proyect.scss'

export default function Proyects() {
    return (
        <>
        <div className="section-container">
        {/* SEPARACION */}
        <div className="section">
        <div className="image-container">
        <img className="img2" src="https://pbs.twimg.com/media/FmNL62hWAAEXIGH?format=jpg&name=large" alt="image 1" />
        </div>
        <div className="text-container">
        <h1>T O D O</h1>
        <h4> En este proyecto utilice: HTML5, CSS3, ReactJS + Vite, Tailwind </h4>
        <div className="containerx">
        <a href="https://github.com/Serphp/react-todo" target="_blank" className="button">Github</a>
        <a href="https://minniecat.netlify.app/" target="_blank" className="button">View</a>
        </div>
        </div>
        </div>

        <hr/>

        <div className="section">
            <div className="image-container">
                <img  className="img2" src="https://pbs.twimg.com/media/FmNL62hWAAEXIGH?format=jpg&name=large" alt="image 1" />
                </div>
                <div className="text-container">
                <h1> Notas </h1>
                <h4>Un compartido de Notas con Laravel + PHP + Bootstrap + HTML5/CSS3 + JavaScript + SASS ++</h4>
                <div className="containerx">
        <a href="https://github.com/Serphp/react-todo" target="_blank" className="button">Github</a>
        <a href="https://minniecat.netlify.app/" target="_blank" className="button">View</a>
        </div>
                </div>
        </div>

        <hr/>

        <div className="section">
            <div className="image-container">
                <img  className="img2" src="https://pbs.twimg.com/media/FmNL62hWAAEXIGH?format=jpg&name=large" alt="image 1" />
                </div>
                <div className="text-container">
                <h1> Notas </h1>
                <h4>Un compartido de Notas con Laravel + PHP + Bootstrap + HTML5/CSS3 + JavaScript + SASS ++</h4>
                <div className="containerx">
        <a href="https://github.com/Serphp/react-todo" target="_blank" className="button">Github</a>
        <a href="https://minniecat.netlify.app/" target="_blank" className="button">View</a>
        </div>
                </div>
        </div>
        {/* SEPARACION */}
        </div>
        </>
    )
};

