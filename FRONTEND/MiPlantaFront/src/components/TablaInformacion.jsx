import axios from "axios";

import { useEffect, useState } from "react";

const URL = `http://${import.meta.env.VITE_BACK_HOST}:${import.meta.env.VITE_BACK_PORT}`;

function formatearFecha(fecha) {
  return new Date(fecha).toLocaleString("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

function TablaInformacion() {
  const [datosTabla, setDatosTabla] = useState([]);
  const [datosPromedio, setDatosPromedio] = useState({
    promedioHumedad: 0,
    promedioTemperatura: 0,
  });

  const ObtenerPromedios = async () => {
    try {
      const resultado = await axios.get(`${URL}/promedios`);
      const { data } = resultado;
      setDatosPromedio({
        promedioHumedad: Number(resultado.data[0].promedioHumedad),
        promedioTemperatura: Number(resultado.data[0].promedioTemperatura),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const ObtenerDatos = async () => {
    try {
      const resultado = await axios.get(`${URL}/registros`);
      const registros = resultado.data.map((d) => ({
        id: d.idRegistro,
        humedad: d.humedad,
        temperatura: d.temperatura,
        fecha: formatearFecha(d.fecha),
      }));

      setDatosTabla(registros);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ObtenerDatos();
    ObtenerPromedios();

    const intervalo = setInterval(() => {
      ObtenerDatos();
      ObtenerPromedios();
    }, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }} className="h4" key={datosPromedio}>
        <p>Promedio humedad: {datosPromedio.promedioHumedad.toFixed(1)} %</p>
        <p>
          Promedio temperatura: {datosPromedio.promedioTemperatura.toFixed(1)}{" "}
          °C
        </p>
      </div>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Humedad (%)</th>
            <th scope="col">Temperatura (°C)</th>
            <th scope="col">Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.humedad}</td>
              <td>{dato.temperatura}</td>
              <td>{dato.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TablaInformacion;
