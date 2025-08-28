import { useContext } from "react";
import { TesteUseContext } from "../hooks/TesteUseContext";

function AlterarValorContext() {
    const {definirValorPadrao} = useContext(TesteUseContext);


  function alterarValor(evento) {
    const valor = evento.target.value;
    definirValorPadrao(valor);


  }
  
  return (
    <div>
      <h1>Alterar Valor Context</h1>
      <input type="number" onChange={alterarValor} />
    </div>
  );
}

export { AlterarValorContext };