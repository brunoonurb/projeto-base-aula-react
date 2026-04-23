import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaMunicipio } from "../pages/ListaMunicipi";
import { Login } from "../pages/Login";


export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/municipios" element={<ListaMunicipio />} /> 
      </Routes>
    </BrowserRouter> 
  );
}
