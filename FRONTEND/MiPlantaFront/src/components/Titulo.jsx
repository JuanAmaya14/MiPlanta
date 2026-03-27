import "../scss/components/Titulo.scss";

function Titulo({ titulo = "..." }) {
  return (
    <>
      <h1 className="tituloH1">{titulo}</h1>
    </>
  );
}

export default Titulo;
