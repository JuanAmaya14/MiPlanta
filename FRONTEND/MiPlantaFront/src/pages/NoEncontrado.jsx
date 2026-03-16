import Footer from "../components/Footer";
import Header from "../components/Header";

function NoEncontrado() {
  return (
    <>
      <Header />

      <main class="container">
        <div className="not-found">
          <h1>Error 404 - Pagina no encontrada</h1>
          <p>Esta pagina es lost media pa</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NoEncontrado;
