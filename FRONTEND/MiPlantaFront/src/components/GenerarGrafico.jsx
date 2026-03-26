import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

const URL = `http://${import.meta.env.VITE_BACK_HOST}:${import.meta.env.VITE_BACK_PORT}`;

function formatearFecha(fecha) {
  return new Date(fecha).toLocaleString("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

const GenerarGrafico = ({ tipoDato, fecha1, fecha2 }) => {
  const [datos, setDatos] = useState([]);

  if (tipoDato == "0") {
    return null;
  }

  const ObtenerDatos = async () => {
    try {
      const resultado = await axios.get(`${URL}/datosGrafica`, {
        params: {
          tipoDato,
          fecha1,
          fecha2,
        },
      });
      setDatos({
        fecha: resultado.data.map((d) => formatearFecha(d.fecha)),
        dato: resultado.data.map((d) => d.humedad ?? d.temperatura),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (tipoDato != 0 && fecha1 != "" && fecha2 != "") {
      ObtenerDatos();
    }
  }, [tipoDato, fecha1, fecha2]);

  const tipoDatoInt = parseInt(tipoDato);
  let tipoDatoString = "";

  switch (tipoDatoInt) {
    case 1:
      tipoDatoString = "humedad (%)";
      break;
    case 2:
      tipoDatoString = "temperatura (°C)";
      break;
  }

  const data = {
    labels: datos.fecha,
    datasets: [
      {
        label: `${tipoDatoString}`,
        data: datos.dato,
        backgroundColor: "#004f39",
        borderColor: "#151613",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `La ${tipoDatoString} entre los dias ${fecha1} y ${fecha2}.`,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GenerarGrafico;
