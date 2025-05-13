import "./App.css";

import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarrinhoContextProvider from "./hooks/CarrinhoContext";
import { RouteApp } from "./route";

function App() {
  return (
    <>
    <CarrinhoContextProvider>
      <ToastContainer />Ï
      <RouteApp />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;
