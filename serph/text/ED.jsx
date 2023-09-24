import { ed } from "../ed";

const ED = () => {
    return (
        <>

{
    ed.map(({nombre, subnombre, descripcion, duracion, estado, previo}, i) => 
    (
        <>
        <div className="ed" key={i}>
            <img src={previo}  />
            <button className="edbtn"> hola </button>
            <div className="edcont">
                <h2 className="etitle"> {nombre} </h2>
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
        </div>
        </>
    ))
}
        </>
    )
}

export default ED;