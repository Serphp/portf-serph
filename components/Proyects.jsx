//import { NProyects } from '../../serph/NProyects'
import '../src/styles/Proyect.scss'
import { NProyects } from '../serph/NProyects';

export default function Proyects() {
    return (
        <>

    <div className="section-container">
            {/* SEPARACION */}

        {
            NProyects.map(({name, description, lang, image, url, url2}, i) => (
                <div className="section">
                <div className="image-container">
                <img className="img2" src={image} alt="image 1" />
                </div>
                <div className="text-container">
                <h2>{name}</h2>
                <h5> {description}</h5>
                <div className="lang">{lang}</div>
                <div className="containerx">
                <a href={url} target="_blank" className="button">Github</a>
                <a href={url2} target="_blank" className="button">View</a>
                </div>
                </div>
                </div>
            ))
                
        }
        {/* SEPARACION */}
        </div>
        </>
    )
};

