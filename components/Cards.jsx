import '../src/styles/Cards.scss'

export default function Cards() {
    return (
        <>

    <div className='mainbg'>
    <h6 className="subtitle"> Habilidades </h6>
    <h5> Soft skills </h5>

    <div className='mb-5'></div>

    <div className="containerx">
    <div className="">
      <div className="face face1">
        <div className=" content">
        <i class="fa fa-door-open"></i>
          <h3> adaptación </h3>
        </div>
      </div>
    </div>
    {/* SEPARATE  */}
    <div className="">
    <div className="face face1">
        <div className=" content">
        <i class="fa fa-layer-group"></i>
          <h3> Organizado </h3>
        </div>
      </div>

    </div>
        {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i class="fa fa-spa"></i>
          <h3> Resiliencia </h3>
        </div>

      </div>
    </div>
            {/* SEPARATE  */}
            <div className="">
        <div className="face face1">
        <div className=" content">
        <i class="fa fa-stack-overflow"></i>
          <h3> Autodidacta </h3>
        </div>
      </div>
    </div>
            {/* SEPARATE  */}
            <div className="">
        <div className="face face1">
        <div className=" content">
        <i class="fa fa-users"></i>
          <h3> Comunicativo </h3>
        </div>
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i class="fa fa-chalkboard"></i>
          <h3> Aprendizaje </h3>
        </div>
      </div>

    </div>
      {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i class="fa fa-icons"></i>
        <h3> Creativo </h3>
        </div>
        </div>

      </div>
      {/* SEPARATE  */}
        <div className="">
        <div className="face face1">
        <div className=" content">
        <i class="fa fa-hand-holding-heart"></i>
        <h3> Apasionado </h3>
        </div>
        </div>
        </div>
        {/* END */}
        </div>
      </div>
        </>
    )
};
