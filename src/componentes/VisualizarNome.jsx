import { useContext } from "react";
import { NovoContext } from "../hooks/NovoContext";

function VisualizarNome(props) {
  const { nome } = useContext(NovoContext);

  return (
    <div className="minhaClasse">
      <p>componente visualizar nome</p>
      <h1>NOME É {nome}</h1>
    </div>
  );
}

export { VisualizarNome };
