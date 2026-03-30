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

function formatearFecha(fecha, promedio) {
  if (promedio == "1") {
    return new Date(fecha).toLocaleString({
      dateStyle: "short",
      timeStyle: "short",
    });
  } else {
    return fecha.split("T")[0];
  }
}

const GenerarGrafico = ({ tipoDato, fecha1, fecha2, todoPromedio }) => {
  const [datos, setDatos] = useState({ fecha: [], dato: [] });

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
          todoPromedio,
        },
      });
      setDatos({
        fecha: resultado.data.map((d) => formatearFecha(d.fecha, todoPromedio)),
        dato: resultado.data.map(
          (d) => d.promedio ?? d.humedad ?? d.temperatura,
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (tipoDato !== "0" && fecha1 !== "" && fecha2 !== "") {
      ObtenerDatos();
    }
  }, [tipoDato, fecha1, fecha2, todoPromedio]);

  let tipoDatoString = "";

  switch (tipoDato) {
    case "1":
      tipoDatoString = "humedad (%)";
      break;
    case "2":
      tipoDatoString = "temperatura (°C)";
      break;
  }

  let modoTexto = "";

  switch (todoPromedio) {
    case "0":
      modoTexto = "todos los registros";
      break;
    case "1":
      modoTexto = "promedio por dia";
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
        text: `La ${tipoDatoString} entre el ${fecha1} y el ${fecha2} (${modoTexto}).`,
      },
    },
  };

  const backgroundPlugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#fffaca";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

  return (
    <Line
      key={`${tipoDato}-${fecha1}-${fecha2}-${todoPromedio}`}
      data={data}
      options={options}
      plugins={[backgroundPlugin]}
    />
  );
};

export default GenerarGrafico;
