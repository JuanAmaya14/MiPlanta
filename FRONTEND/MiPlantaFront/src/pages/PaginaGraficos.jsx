import Footer from "../components/Footer";
import FormGraficos from "../components/FormGraficos";
import Header from "../components/Header";

function PaginaGraficos() {
  return (
    <>
      <Header />
      <main className="container">
        <FormGraficos />
      </main>
      <Footer />
    </>
  );
}

export default PaginaGraficos;
