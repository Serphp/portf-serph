
import '../src/styles/Proyect.scss'
import { NProyects } from '../serph/NProyects';
import { Link } from 'react-router-dom';

export default function Proyects() {

    return (
        <>

<div className="mainbg">
            <h6 className="subtitle"><i className="fa fa-location-arrow"></i> Últimos proyectos </h6>
        <h2> Last proyects </h2>
        <div className="mb-5"></div>
        
    <div className="section-container">
    {/* {name, description, image, url, url2, lang }, i */}
        {
            NProyects.slice(0, 3).map((item, i) => (
                <div key={i} className="section">

                    <div className="image-container">
                    <img src={item.image} alt={item.name} title={item.name}/>
                    </div>
                    
                    <div className="text-container">
                        
                        <div className='ttitle'>{item.name}</div>

                        <div className='contenedor_des'>
                            <b>{item.categoria}</b>
                            <div className="contech">
                                
                                {item.lang.split(',').map((image) => (
                                    <div className='boxtech'>{image}
                                </div>
                                ))}
                            </div>
                        </div>

                        <p className='tdescription'> {item.description}</p>
                        
                        <div className="containerq">
                            {
                                item.url === '' ? '' :  <a href={item.url || 'null'} target="_blank" className="buttonp">
                                {/* icono */}
                                <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.309 2.309 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"></path>
                                </svg>
                                </a>
                            }
                                                        {
                                item.url2 === '' ? '' :  <a href={item.url2 || 'null'} target="_blank" className="buttonp">Ver Proyecto</a>
                            }
                        </div>
                    </div>
                </div>
            ))
        }
        {/* SEPARACION */}
        </div>
        <div className="mb-3"></div>
            <div className='buttoned'>
                <Link to='/Proyectos'>  Mas proyectos </Link>
            </div>

            {/* {{end}} */}
        </div>


        </>
    )
};

export function Proyects2() {

    return (
        <>

<div className="mainbg">
            <h6 className="subtitle"><i className="fa fa-location-arrow"></i> Proyectos </h6>
        <h2> Proyects </h2>
        <div className="mb-5"></div>
        
    <div className="section-container">
    {/* {name, description, image, url, url2, lang }, i */}
        {
            NProyects.map((item, i) => (
                <div key={i} className="section">

                    <div className="image-container">
                    <img src={item.image} alt={item.name} title={item.name}/>
                    </div>
                    
                    <div className="text-container">
                        
                        <div className='ttitle'>{item.name}</div>

                        <div className='contenedor_des'>
                            <b>{item.categoria}</b>
                            <div className="contech">
                                
                                {item.lang.split(',').map((image) => (
                                    <div className='boxtech'>{image}
                                </div>
                                ))}
                            </div>
                        </div>

                        <p className='tdescription'> {item.description}</p>
                        
                        <div className="containerq">
                            {
                                item.url === '' ? '' :  <a href={item.url || 'null'} target="_blank" className="buttonp">
                                {/* icono */}
                                <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.309 2.309 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"></path>
                                </svg>
                                </a>
                            }
                                                        {
                                item.url2 === '' ? '' :  <a href={item.url2 || 'null'} target="_blank" className="buttonp">Ver Proyecto</a>
                            }
                        </div>
                    </div>
                </div>
            ))
        }
        {/* SEPARACION */}
        </div>
        <div className="mb-3"></div>
            <div className='buttoned'>
                <a href='https://github.com/Serphp'>  Mas proyectos </a>
            </div>

            {/* {{end}} */}
        </div>


        </>
    )
};