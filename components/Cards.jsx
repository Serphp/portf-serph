import '../src/styles/Cards.scss'
import { Link } from "react-router-dom";

export default function Cards() {
    return (
        <>

    <div className='mainbg'>
    <h6 className="subtitle">Soft skill</h6>
    <h2>¿Que hago?</h2>
    <p className='centert mb-5'>El compromiso de perseverar y nunca abandonar es un lema personal que guía mi actitud y enfoque en la vida.</p>

    <div className="containerx">
    <div className="cardx">
      <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-tree"></i>
          <h3> Balance </h3>
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
        <i class="fa fa-bug"></i>
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
        <i class="fa fa-list"></i>
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
        <i class="fa fa-list"></i>
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
        <i class="fa fa-list"></i>
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
          <h3> Learning </h3>
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
