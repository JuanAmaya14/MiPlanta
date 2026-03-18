import { useState } from "react";

function FormGraficos() {
  const [tipoDato, setTipoDato] = useState("");
  const [ultimosDias, setUltimosDias] = useState("");

  const Obtenerdato = (e) => {
    e.preventDefault(); // evita recargar la página
    console.log(tipoDato);
    console.log(ultimosDias);
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

        

      </main>
    </>
  );
}

export default FormGraficos;
