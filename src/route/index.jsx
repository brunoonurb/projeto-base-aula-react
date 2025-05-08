import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produto";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </BrowserRouter> 
  );
}
