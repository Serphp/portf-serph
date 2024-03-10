export default function Formulario() {
  return (
    <>
      <div className="mainbgs">
        <h6 className="subtitle">
          <i className="fa fa-box-open"></i> Contactame{" "}
        </h6>
        <h2> Contact </h2>
        <div className="mb-5"></div>

        <form className="form">
          <section className="home">
            <div className="menus">
              <h6 className="subtitle" style={{ textAlign: "left" }}>
                Llenar el formulario.
              </h6>

              <input type="text" name="user_name" placeholder="Nombre" />

              <input type="email" name="user_email" placeholder="Email" />

              <div className="mt-4"></div>
            </div>
            <div className="menus2">

                <textarea
                  name="message"
                  placeholder="Descripción del mensaje..."
                />
                <input type="submit" className="submit" value="Enviar correo" />

            </div>
          </section>
        </form>
      </div>
    </>
  );
}
