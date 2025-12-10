import { AlterNome } from "../componentes/AlteraNome";
import { ComponenteExemplo } from "../componentes/ComponenteExemplo";
import { VisualizarNome } from "../componentes/VisualizarNome";
import { NovoContextProvider } from "../hooks/NovoContext";

function PageExemploContext() {
  return (
    <div>
      <h1>PAGE EXEMPLO</h1>

      <NovoContextProvider>
        <AlterNome />
        <br />
        <hr />
        <br />
        <VisualizarNome />
      </NovoContextProvider>
    </div>
  );
}

export { PageExemploContext };
