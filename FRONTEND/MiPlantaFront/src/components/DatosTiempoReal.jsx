function DatosTiempoReal() {
  return (
    <>
      <section className="seccionDatos">
        <h1>Datos de la tierra en tiempo real.</h1>

        <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
          <h3 className="card-header">Temperatura</h3>
          <div className="card-body">
            <p className="display-1">20 &deg;C</p>
          </div>
        </div>

        <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
          <h3 className="card-header">Humedad</h3>
          <div className="card-body">
            <p className="display-1">60&#37;</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DatosTiempoReal;
