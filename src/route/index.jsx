import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaMunicipio } from "../pages/ListaMunicipi";
import { Login } from "../pages/Login";
import { Produto } from "../pages/Produto";
import { Carrinho } from "../pages/Carrinho";


export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/municipios" element={<ListaMunicipio />} /> 
       
        <Route path="/produtos" element={<Produto />} /> 
        <Route path="/carrinho" element={<Carrinho />} /> 

      </Routes>
    </BrowserRouter> 
  );
}
