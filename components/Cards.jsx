import '../src/styles/Cards.scss'

export default function Cards() {
    return (
        <>

    <div className='mainbg'>
    <h6 className="subtitle">Soft skill</h6>
    <h2>¿Como soy?</h2>
    <p className='centert mb-5'>El compromiso de perseverar y nunca abandonar es un lema personal que guía mi actitud y enfoque en la vida.</p>

    <div className="containerx">
    <div className="cardx">
      <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-door-open"></i>
          <h3> adaptación </h3>
        </div>
      </div>
      <div className="face face2">
      {/* <Link className="btncard" to="/about" type="button">Read More</Link> */}
      </div>
    </div>
    {/* SEPARATE  */}
    <div className="cardx">
    <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-layer-group"></i>
          <h3> Organizado </h3>
        </div>
      </div>
      <div className="face face2">
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-spa"></i>
          <h3> Resiliente </h3>
        </div>
      </div>
      <div className="face face2">
      </div>
    </div>
            {/* SEPARATE  */}
            <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-stack-overflow"></i>
          <h3> Autodidacta </h3>
        </div>
      </div>
      <div className="face face2">
      </div>
    </div>
            {/* SEPARATE  */}
            <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-users"></i>
          <h3> Comunicativo </h3>
        </div>
      </div>
      <div className="face face2">
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-chalkboard"></i>
          <h3> Aprendizaje </h3>
        </div>
      </div>
      <div className="face face2">
      </div>
    </div>
      {/* SEPARATE  */}
        <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-icons"></i>
        <h3> Creativo </h3>
        </div>
        </div>
        <div className="face face2">
        </div>
      </div>
      {/* SEPARATE  */}
        <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-hand-holding-heart"></i>
        <h3> Apasionado </h3>
        </div>
        </div>
        <div className="face face2">
        </div>
        </div>
        {/* END */}
        </div>
      </div>
        </>
    )
};
