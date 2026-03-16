function DatosTiempoReal() {
  return (
    <>
      <main class="container">
        <section className="seccionDatos">
          <h1>Datos de la tierra en tiempo real.</h1>

          <div
            className="card text-bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              <h3>Temperatura</h3>
              <span class="material-symbols-outlined">device_thermostat</span>
            </div>
            <div className="card-body">
              <p className="display-1">20 &deg;C</p>
            </div>
          </div>

          <div
            className="card text-bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              <h3>Humedad</h3>
              <span class="material-symbols-outlined">water_drop</span>
            </div>
            <div className="card-body">
              <p className="display-1">60&#37;</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DatosTiempoReal;
