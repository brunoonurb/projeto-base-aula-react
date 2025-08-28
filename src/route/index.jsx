import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Produtos } from "../pages/Produto";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Carrinho } from "../pages/Carrinho";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}
