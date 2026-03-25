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
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");
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

    if (!fecha1 || fecha1 === "") {
      alert("Selecciona la primera fecha");
      return;
    }

    if (!fecha2 || fecha2 === "") {
      alert("Selecciona la segunda fecha");
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
          </div>
          <div className="divFormulario input-group mb-3">
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
              value={fecha1}
              onChange={(e) => setFecha1(e.target.value)}
              required
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
              value={fecha2}
              onChange={(e) => setFecha2(e.target.value)}
              required
            />
          </div>

          <button onClick={Obtenerdato} className="colorBoton btn">
            Generar grafico
          </button>
        </form>

        {mostrarGrafico && (
          <GenerarGrafico tipoDato={tipoDato} fecha1={fecha1} fecha2={fecha2} />
        )}

        <br />
      </main>
    </>
  );
}

export default FormGraficos;
