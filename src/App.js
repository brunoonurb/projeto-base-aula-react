import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

import { RouteApp } from "./route";
import { ToastContainer } from "react-toastify";
import ContextApagadorProvider from "./hooks/TesteContext";
import ContextCarrinhoProvider from "./hooks/TesteCarrinho";

function App() {
  return (

    <>
      <ToastContainer />

      <ContextApagadorProvider>
        <ContextCarrinhoProvider>
          <RouteApp />
        </ContextCarrinhoProvider>
      </ContextApagadorProvider>
    </>
  );
}

export default App;
