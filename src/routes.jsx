import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Filme from "./Pages/Film/Filme.jsx";
import Header from "./components/Header/Header.jsx";
import Erro from "./Pages/Erro/Erro.jsx";
import Favoritos from "./Pages/Favoritos/Favoritos.jsx";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
