import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal.jsx";
import Graficos from "./pages/PaginaGraficos.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/graficas" element={<Graficos />} />
        <Route path='*' element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
