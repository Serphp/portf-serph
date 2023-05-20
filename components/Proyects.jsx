
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
                    <img className="img2" src={image} alt={name} title={name}/>
                    </div>
                    <div className="text-container">
                        <h2 className='ttitle'>{name}</h2>
                        <p className='tdescription'> {description}</p>
                        <div className="tlinks">{lang}</div>
                        <div className="containerq">
                        <a href={url} target="_blank" className="buttonp">Github</a>
                        <a href={url2} target="_blank" className="buttonp">View</a>
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

