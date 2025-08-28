import { useContext } from "react";
import { TesteUseContext } from "../hooks/TesteUseContext";

function ComponenteManipularContext() {
  const { aumentarValor, diminuirValor } = useContext(TesteUseContext);

  return (
    <div className="bg-primary">
      <h1>Componente Manipular Context</h1>

      <button onClick={aumentarValor}>Aumentar Valor</button>
      <button onClick={diminuirValor}>Diminuir Valor</button>
    </div>
  );
}

export { ComponenteManipularContext };
