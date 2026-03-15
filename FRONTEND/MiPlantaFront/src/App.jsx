import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal.jsx";
import Graficos from "./pages/PaginaGraficos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/graficas" element={<Graficos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
