import { useState } from "react";
import { Line } from "react-chartjs-2";
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

function generarFechaAleatoria(inicio, fin) {
  const startTimestamp = inicio.getTime();
  const endTimestamp = fin.getTime();

  const randomTimestamp = Math.floor(
    Math.random() * (endTimestamp - startTimestamp + 1) + startTimestamp,
  );

  return new Date(randomTimestamp);
}
const GenerarGrafico = ({ tipoDato, ultimosDias }) => {
  const [valores] = useState(() =>
    Array.from({ length: ultimosDias }, () => Math.floor(Math.random() * 100)),
  );

  const [fechas] = useState(() =>
    Array.from({ length: ultimosDias }, () =>
      generarFechaAleatoria(new Date(2025, 0, 1), new Date()),
    ),
  );

  const tipoDatoInt = parseInt(tipoDato);
  let tipoDatoString = "";

  switch (tipoDatoInt) {
    case 1:
      tipoDatoString = "humedad (%)";
      break;
    case 2:
      tipoDatoString = "temperatura (°C)";
      break;
    default:
      console.log("ola");
      break;
  }

  const data = {
    labels: fechas,
    datasets: [
      {
        label: `${tipoDatoString}`,
        data: valores,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
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
        text: `La ${tipoDatoString} en los ultimos ${ultimosDias} dias.`,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GenerarGrafico;
