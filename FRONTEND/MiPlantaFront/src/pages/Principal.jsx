import DatosTiempoReal from "../components/DatosTiempoReal.jsx";
import Header from "../components/Header.jsx";
import Foot from "../components/Footer.jsx";
import Titulo from "../components/Titulo.jsx";

function Principal() {
  return (
    <>
      <Header />
      <main className="container">
        <Titulo titulo="Datos de la tierra en tiempo real." />
        <DatosTiempoReal />
      </main>
      <Foot />
    </>
  );
}

export default Principal;
