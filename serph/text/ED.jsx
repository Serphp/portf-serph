import { NProyects } from "../NProyects";
import { ed } from "../ed";
import { sphp } from "../ed";

const ED = () => {
    return (
        <>


{
    ed.map(({nombre, subnombre, descripcion, duracion, estado, previo, url}, i) => 
    (
        <>
        <div className="ed" key={i}>
        <div className="edimg">
            <img src={previo}  />
        </div>
        <div className="space2">  
        </div>
        <div className="edcont">
            <div className="edcont2">
            <span className="sub">
            {subnombre}
        </span>
        <p className="top-description">
            {descripcion}
        </p>
            <div className="top-cont-title">
                <span className="tlinks">
                    {duracion}
                </span>
                <span className="tlinks">
                    {estado}
                </span>               
            </div>
            </div>
            <div className="buttoned"> 
                <a href={url}>Ver Proyecto</a></div>
            </div>
        </div>
        </>
    ))
}

<div className="ed">
    <div className="edespacio">
        <h6> Proyectos Individuales </h6>
        <i className="fa fa-arrow-right"></i>
    </div>
</div>

{
    sphp.map(({nombre, subnombre, descripcion, duracion, estado, previo, url}, i) => 
    (
        <>
        <div className="ed" key={i}>
            <div className="edimg">
                <img src={previo}  />
            </div>
            <div className="space2">  
            </div>
        <div className="edcont">
            <div className="edcont2">
                <span className="sub">
                {subnombre}
                </span>
                <p className="top-description">
                    {descripcion}
                </p>
                <div className="top-cont-title">
                    <span className="tlinks">
                        {duracion}
                    </span>
                    <span className="tlinks">
                        {estado}
                    </span>               
                </div>
            </div>
            <div className="buttoned"> 
                <a href={url}>Ver Proyecto  </a></div>
            </div>
        </div>
        </>
    ))
}

<div className="ed">
    <div className="edespacio">
        <h6> Mas Proyectos </h6>
        <i className="fa fa-arrow-right"></i>
    </div>
</div>

{/* PROYECTOS EXTRAS */}

{
    NProyects.map(({name, description, lang, image, url, url2}, i) => (
        <>
        <div className="ed" key={i}>
            <div className="edimg2">
                <img src={image}  />
            </div>
            <div className="space2">  
            </div>
        <div className="edcont">
            <div className="edcont2">
                <span className="sub">
                {name}
                </span>
                <p className="top-description">
                    {description}
                </p>
                <div className="top-cont-title">
                    <span className="tlinks">
                        ..
                    </span>
                    <span className="tlinks">
                        ...
                    </span>               
                </div>
            </div>
            <div className="buttoned"> 
                <a href={url}>Ver Proyecto  </a></div>
            </div>
        </div>
        </>
    ))
}


        </>
    )
}

export default ED;