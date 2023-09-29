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
            {/* <h2 className="etitle"> {nombre} </h2> */}
                                        <div className="edbtn"> 
                            <a href={url}>Ver Proyecto  </a></div>
                                </div>
        </div>
        </>
    ))
}

<div className="ed">
    <div className="edespacio">
        <h6> Proyectos Individuales </h6>
        <i class="fa fa-arrow-right"></i>
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
            <div className="edbtn"> 
                <a href={url}>Ver Proyecto  </a></div>
            </div>
        </div>
        </>
    ))
}

<div className="ed">
    <div className="edespacio">
        <h6> Mas Proyectos </h6>
        <i class="fa fa-arrow-right"></i>
    </div>
</div>





        </>
    )
}

export default ED;