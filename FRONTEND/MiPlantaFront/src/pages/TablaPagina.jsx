import Footer from "../components/Footer";
import Header from "../components/Header";
import TablaInfomracion from "../components/TablaInformacion";
import Titulo from "../components/Titulo.jsx";

function Tabla() {
  return (
    <>
      <Header />

      <main className="container">
        <Titulo titulo="Todos los datos de la tierra." />
        <TablaInfomracion />
      </main>

      <Footer />
    </>
  );
}

export default Tabla;
