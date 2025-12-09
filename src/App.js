import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { ComponenteExemplo } from "./componentes/ComponenteExemplo";
import { RouteApp } from "./route";
import { CarrinhoContextProvider } from "./hooks/Carrinho";
import ExemploContextProvider, { ExemploContext } from "./hooks/ExemploContext";

function App() {
  return (
    <div className="App">
      <CarrinhoContextProvider>
        <ExemploContextProvider>
          <RouteApp />
        </ExemploContextProvider>
      </CarrinhoContextProvider>
    </div>
  );
}

export default App;
