import axios from "axios";

import { useEffect, useState } from "react";

const URL = `http://${import.meta.env.VITE_BACK_HOST}:${import.meta.env.VITE_BACK_PORT}`;

function formatearFecha(fecha) {
  return new Date(fecha).toLocaleString("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

function TablaInfomracion() {
  const [datos, setDatos] = useState([]);

  const ObtenerDatos = async () => {
    try {
      const resultado = await axios.get(`${URL}/registros`);
      const registros = resultado.data.map((d) => ({
        id: d.idRegistro,
        humedad: d.humedad,
        temperatura: d.temperatura,
        fecha: formatearFecha(d.fecha),
      }));

      setDatos(registros);

      console.log(registros);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    ObtenerDatos();

    const intervalo = setInterval(() => {
      ObtenerDatos();
    }, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
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
          {datos.map((dato) => (
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

export default TablaInfomracion;
