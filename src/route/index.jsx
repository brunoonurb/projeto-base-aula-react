import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ComponenteExemplo } from "../componentes/ComponenteExemplo";
import { Login } from "../pages/Login";
import { Produtos } from "../pages/exemplos/Produtos";
import { PageExemploContext } from "../pages/PageExemploContext";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login/>}/>

        <Route path="/exemplo" element={<PageExemploContext/>}/>

      </Routes>
    </BrowserRouter>
  );
}
