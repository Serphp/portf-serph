import { Navbar } from "../components";
import Projects from "../components/Projects";
import { Proyects2 } from "../components/Proyects";

export default function Proyectos() {
  return (
    <main>
      <Navbar />

      <div className="mainbg">
        <h6 className="subtitle">
          <i className="fa fa-location-arrow"></i> Proyectos{" "}
        </h6>
        <h2> Proyects </h2>
        <h6>
          {" "}
          Puedes visualizar la imagen completa manteniendo oprimido la imagen.
        </h6>
        <div className="mb-5"></div>

        <Projects />
      </div>
    </main>
  );
}
