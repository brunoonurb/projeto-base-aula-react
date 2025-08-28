import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { ComponenteExemplo } from "./componentes/ComponenteExemplo";
import { RouteApp } from "./route";
import { TesteUseContextProvider } from "./hooks/TesteUseContext";
import { CarrinhoContextProvider } from "./hooks/CarrinhoContext";

function App() {
  return (
    <div className="App">
      <TesteUseContextProvider>
        <CarrinhoContextProvider>
          <RouteApp />
        </CarrinhoContextProvider>
      </TesteUseContextProvider>
    </div>
  );
}

export default App;
