import "../scss/components/DatosTiempoReal.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const URL = `http://${import.meta.env.VITE_BACK_HOST}:${import.meta.env.VITE_BACK_PORT}`;

function DatosTiempoReal() {
  const ObtenerUltimoDato = async () => {
    try {
      const resultado = await axios.get(`${URL}/ultimoregistro`);
      const { data } = resultado;
      setDatos(resultado.data[0]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    ObtenerUltimoDato();

    const intervalo = setInterval(() => {
      ObtenerUltimoDato();
    }, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <main className="container">
        <section key={datos} className="seccionDatos">
          <h1>Datos de la tierra en tiempo real.</h1>

          <div
            className="card text-bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              <h3>Temperatura</h3>
              <span className="material-symbols-outlined">
                device_thermostat
              </span>
            </div>
            <div className="card-body">
              <p className="display-1">{datos.temperatura} &deg;C</p>
            </div>
          </div>

          <div
            className="card text-bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              <h3>Humedad</h3>
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <div className="card-body">
              <p className="display-1">{datos.humedad}&#37;</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DatosTiempoReal;
