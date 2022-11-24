import '../src/styles/Cards.css'

export default function Cards() {
    return (
        <>
    <div class="containerx mt-4">
    <div class="cardx">
      <div class="face face1">
        <div class="content">
          <i class="fab fa-windows"></i>
          <h3> Aprendizaje </h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Aqui puede encontrar una documentacion de todos lo que he aprendido. </p>
          <a className='ae' href="#" type="button">Read More</a>
        </div>
      </div>
    </div>
    <div class="cardx">
      <div class="face face1">
        <div class="content">
          <i class="fab github"></i>
          <h3> Github </h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> En mi github puede verse los proyectos en los que he trabajado y hecho.</p>
          <a className='ae' href="#" type="button">Read More</a>
        </div>
      </div>
    </div>
    <div class="cardx">
      <div class="face face1">
        <div class="content">
          <i class="fab linkid"></i>
          <h3> LinkID </h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic
            cum ratione a.</p>
          <a className='ae' href="#" type="button">Read More</a>
        </div>
      </div>
    </div>
  </div>
  
        </>
    )
};
