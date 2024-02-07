import '../src/styles/Cards.scss'

export default function Cards() {
    return (
        <>

    <div className='mainbg'>
    <h6 className="subtitle"><i className="fa fa-network-wired"></i> Habilidades </h6>
    <h2> Soft skills </h2>

    <div className='mb-5'></div>

    <div className="containerx">
    <div className="">
      <div className="face face1">
        <div className=" content">
        <i className="fa fa-door-open"></i>
          <h3> adaptación Y flexibilidad </h3>
        </div>
      </div>
    </div>
    {/* SEPARATE  */}
    <div className="">
    <div className="face face1">
        <div className=" content">
        <i className="fa fa-layer-group"></i>
          <h3> Resolucion de Problemas </h3>
        </div>
      </div>

    </div>
        {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i className="fa fa-spa"></i>
          <h3> Resiliencia </h3>
        </div>

      </div>
    </div>
            {/* SEPARATE  */}
            <div className="">
        <div className="face face1">
        <div className=" content">
        <i className="fa fa-stack-overflow"></i>
          <h3> Autodidacta y Autónomo </h3>
        </div>
      </div>
    </div>
            {/* SEPARATE  */}
            <div className="">
        <div className="face face1">
        <div className=" content">
        <i className="fa fa-users"></i>
          <h3> Comunicativo y detallado </h3>
        </div>
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i className="fa fa-chalkboard"></i>
          <h3> Aprendizaje Constante </h3>
        </div>
      </div>

    </div>
      {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i className="fa fa-icons"></i>
        <h3> Creativo e Innovador </h3>
        </div>
        </div>

      </div>
      {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i className="fa fa-hand-holding-heart"></i>
        <h3> Programador Apasionado </h3>
        </div>
        </div>
        </div>
        {/* END */}
        </div>
      </div>
        </>
    )
};
