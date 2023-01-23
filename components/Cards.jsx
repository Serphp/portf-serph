import '../src/styles/Cards.scss'
import { Link } from "react-router-dom";

export default function Cards() {
    return (
        <>

      <h1 > Soft Skills </h1>
      <hr/>
        
    <div className="containerx">

    <div className="cardx">
      <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-tree"></i>
          <h3> Balance </h3>
        </div>
      </div>
      <div className="face face2">
      <p> Comprensible y Adaptable </p>
      {/* <Link className="btncard" to="/about" type="button">Read More</Link> */}
      </div>
    </div>
    {/* SEPARATE  */}
    <div className="cardx">
    <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-bug"></i>
          <h3> Solucions </h3>
        </div>
      </div>
      <div className="face face2">
      <p> Altamente capacitado para solucionar y encontrar problemas.</p>
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="cardx">
        <div className="face face1">
        <div className="containerx content">
        <i class="fa fa-list"></i>
          <h3> Order </h3>
        </div>
      </div>
      <div className="face face2">
      <p> Capaz de mantener la calma y controlar situaciones delicadas.</p>
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
      <p> Capaz de entender y aprender nuevas tecnologías de forma sencilla.</p>
      </div>
    </div>
    {/* END */}
  </div>
  
        </>
    )
};
