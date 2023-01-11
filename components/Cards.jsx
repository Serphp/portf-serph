import '../src/styles/Cards.scss'

export default function Cards() {
    return (
        <>

<div className='cardflot'> 
        <h1 > Soft Skills </h1>
        </div>
        
    <div className="containerx">
    {/* <div className="cardx">
      <div className="face face1">
        <div className="content">
        <i className="fa-solid fa-book"></i>
          <h3> Aprendizaje </h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p> Aqui puede encontrar una documentacion de todos lo que he aprendido. </p>
          <a className='btncard' href="#" type="button">Read More</a>
        </div>
      </div>
    </div> */}


    <div className="cardx">
      <div className="face face1">
        <div className="content">
        <i class="fa fa-tree"></i>
          <h3> Balance </h3>
        </div>
      </div>
      <div className="face face2">
      <a className='btncard' href="/about" type="button">Read More</a>
      </div>
    </div>
    {/* SEPARATE  */}
    <div className="cardx">
      <div className="face face1">
        <div className="content">
        <i class="fa fa-bug"></i>
          <h3> Solucions </h3>
        </div>
      </div>
      <div className="face face2">
      <a className='btncard' href="/about" type="button">Read More</a>
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="cardx">
      <div className="face face1">
        <div className="content">
        <i class="fa fa-list"></i>
          <h3> Order </h3>
        </div>
      </div>
      <div className="face face2">
      <a className='btncard' href="/about" type="button">Read More</a>
      </div>
    </div>
        {/* SEPARATE  */}
        <div className="cardx">
      <div className="face face1">
        <div className="content">
        <i class="fa fa-chalkboard"></i>
          <h3> Learning </h3>
        </div>
      </div>
      <div className="face face2">
      <a className='btncard' href="/about" type="button">Read More</a>
      </div>
    </div>
    {/* END */}
  </div>
  
        </>
    )
};
