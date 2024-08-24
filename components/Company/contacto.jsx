export default function Contact() {
  return (
    <>
      <div className="mainbg">
        <h6 className="subtitle">
          <i className="fa fa-location-arrow"></i> Mas información{" "}
        </h6>
        <h2> Contacto </h2>
        <div className="mb-5"></div>

        <div className="educont2">

          <div className="cuadro-persona5" 
          // style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/01/91/78/32/360_F_191783282_0TVrx5VrvrkpDHSKdjjI87HkbXJy5TMw.jpg')" }}
          >
            <a href="mailto:Serphp@hotmail.com?subject=Preguntar un servicio&body=Cuerpo del correo">
              Serphp@hotmail.com
            </a>
          </div>

          <div
            className="cuadro-persona5"
            style={{ backgroundImage: "url('https://www.visitcentroamerica.com/wp-content/uploads/2017/09/ver-centroamerica-panama-ciudad-01.jpg')" }}
          >
            Ciudad de Panamá
          </div>

          <div className="cuadro-persona5">Remoto</div>
          
        </div>
      </div>
    </>
  );
}
