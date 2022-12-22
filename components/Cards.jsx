import '../src/styles/Cards.scss'

export default function Cards() {
    return (
        <>
    <div className="containerx mt-3">
    <div className="cardx">
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
    </div>
    <div className="cardx">
      <div className="face face1">
        <div className="content">
          <i className="fab fa-github"></i>
          <h3> Github </h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p> En mi github puede verse los proyectos en los que he trabajado y hecho.</p>
          <a className='btncard' href="#" type="button">Read More</a>
        </div>
      </div>
    </div>
    <div className="cardx">
      <div className="face face1">
        <div className="content">
        <i className="fa-brands fa-linkedin"></i>
          <h3> LinkID </h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
            cum ratione a.</p>
          <a className='btncard' href="#" type="button">Read More</a>
        </div>
      </div>
    </div>
  </div>
  
        </>
    )
};
