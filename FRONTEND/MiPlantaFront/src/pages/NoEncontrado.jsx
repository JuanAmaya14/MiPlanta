import Footer from "../components/Footer";
import Header from "../components/Header";

function NoEncontrado() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="not-found">
          <h1>Error 404 - Pagina no encontrada</h1>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NoEncontrado;
