import { useEffect, useState } from "react";
import GenerarGrafico from "./GenerarGrafico";
import "../scss/components/FormGraficos.scss";
import axios from "axios";

const URL = `http://${import.meta.env.VITE_BACK_HOST}:${import.meta.env.VITE_BACK_PORT}`;

function formatearFecha(fecha) {
  return fecha.split("T")[0];
}

function FormGraficos() {
  const [tipoDato, setTipoDato] = useState("");
  const [ultimosDias, setUltimosDias] = useState("");
  const [mostrarGrafico, setMostrarGrafico] = useState(false);
  const [rangoFechas, setRangoFechas] = useState({
    fechaMinima: "",
    fechaMaxima: "",
  });
  const LimiteFechas = async () => {
    try {
      const resultado = await axios.get(`${URL}/rangoFechas`);
      const { data } = resultado;
      setRangoFechas({
        fechaMinima: formatearFecha(resultado.data[0].fechaMinima),
        fechaMaxima: formatearFecha(resultado.data[0].fechaMaxima),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    LimiteFechas();
  }, []);

  const Obtenerdato = (e) => {
    e.preventDefault();
    if (!tipoDato || tipoDato === "0") {
      alert("Selecciona un tipo de dato");
      return;
    }

    if (!ultimosDias || ultimosDias <= 0) {
      alert("Ingresa un número de días válido, no puede ser 0");
      return;
    }
    setMostrarGrafico(true);
  };

  return (
    <>
      <main className="container">
        <form>
          <div className="divFormulario input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Tipo de dato
            </label>

            <select
              className="form-select"
              id="inputGroupSelect01"
              value={tipoDato}
              onChange={(e) => setTipoDato(e.target.value)}
            >
              <option value="0">Selecciona...</option>
              <option value="1">Humedad</option>
              <option value="2">Temperatura</option>
            </select>

            <label
              className="input-group-text"
              id="inputGroup-sizing-default"
              htmlFor="inputNumber"
            >
              Ultimos dias
            </label>
            <input
              id="inputNumber"
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={ultimosDias}
              onChange={(e) => setUltimosDias(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label
              className="input-group-text"
              id="basic-addon1"
              htmlFor="fechaInicio"
            >
              Desde...
            </label>
            <input
              id="fechaInicio"
              type="date"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              min={rangoFechas.fechaMinima}
              max={rangoFechas.fechaMaxima}
            />
            <label
              className="input-group-text"
              id="basic-addon1"
              htmlFor="fechaFin"
            >
              Hasta...
            </label>
            <input
              id="fechaFin"
              type="date"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              min={rangoFechas.fechaMinima}
              max={rangoFechas.fechaMaxima}
            />
          </div>

          <button onClick={Obtenerdato} className="colorBoton btn">
            Generar grafico
          </button>
        </form>

        {mostrarGrafico && (
          <GenerarGrafico tipoDato={tipoDato} ultimosDias={ultimosDias} />
        )}

        <br />
      </main>
    </>
  );
}

export default FormGraficos;
