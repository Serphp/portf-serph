
import '../src/styles/Proyect.scss'
import { NProyects } from '../serph/NProyects';

export default function Proyects() {
    return (
        <>

<div className="mainbg">
            <h6 className="subtitle"><i class="fa fa-location-arrow"></i> Proyectos </h6>
        <h2> Proyects </h2>
        <div className="mb-5"></div>
        
    <div className="section-container">

        {
            NProyects.map(({name, description, lang, image, url, url2}, i) => (
                <div className="section">

                    <div className="image-container">
                    <img className="" src={image} alt={name} title={name}/>
                    </div>
                    <div className="text-container">
                        <div className="tlinks">{lang}</div>
                        <h2 className='ttitle'>{name}</h2>
                        <p className='tdescription'> {description}</p>
                        
                        <div className="containerq">
                            {
                                url === '' ? '' :  <a href={url || 'null'} target="_blank" className="buttonp">Github</a>
                            }
                                                        {
                                url2 === '' ? '' :  <a href={url2 || 'null'} target="_blank" className="buttonp">View</a>
                            }
                        </div>
                    </div>
                </div>
            ))
                
        }
        {/* SEPARACION */}
        </div>
        </div>
        </>
    )
};

