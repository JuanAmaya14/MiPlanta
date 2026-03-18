import { useState } from "react";
import GenerarGrafico from "./GenerarGrafico";

function FormGraficos() {
  const [tipoDato, setTipoDato] = useState("");
  const [ultimosDias, setUltimosDias] = useState("");
  const [mostrarGrafico, setMostrarGrafico] = useState(false);

  const Obtenerdato = (e) => {
    e.preventDefault();
    setMostrarGrafico(true);
  };

  return (
    <>
      <main className="container">
        <form>
          <div className="input-group mb-3">
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

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Ultimos dias
            </span>
            <input
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={ultimosDias}
              onChange={(e) => setUltimosDias(e.target.value)}
            />
          </div>

          <button onClick={Obtenerdato} type="button" className="btn btn-light">
            Light
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
