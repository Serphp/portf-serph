export default function Jobs() {
  return (
    <>
      <div className="mainbgs">
        <h6 className="subtitle">
          <i className="fa fa-box-open"></i> Servicios{" "}
        </h6>
        <h2> Services </h2>
        <div className="mb-4"></div>

        <article class="service-article">
          <div class="service-container">
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3>Consultoría Personalizada</h3>
              <p>
                Recibe asesoramiento especializado en desarrollo de software,
                adaptado a tus necesidades específicas. Orientación estratégica
                en tecnología para tomar decisiones informadas.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-cogs"></i>
              </div>
              <h3>Servicios Mensuales de Mantenimiento</h3>
              <p>
                Garantiza el funcionamiento óptimo de tus sistemas con nuestro
                servicio de mantenimiento mensual. Actualizaciones constantes y
                soporte personalizado.
              </p>
            </div>

            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-project-diagram"></i>
              </div>
              <h3>Desarrollo de Proyectos a Medida</h3>
              <p>
                Lleva tus ideas desde la concepción hasta la implementación con
                nuestro equipo altamente capacitado. Soluciones tecnológicas
                personalizadas para tus objetivos.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
