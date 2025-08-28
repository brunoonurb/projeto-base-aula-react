import { useContext } from "react";
import { TesteUseContext } from "../hooks/TesteUseContext";

function AlterarValorContext() {
    const {definirValorPadrao} = useContext(TesteUseContext);


  function alterarValor(evento) {
    const valor = evento.target.value;
    definirValorPadrao(valor);


  }
  
  return (
    <div className="bg-warning">
      <h1>Alterar Valor Context</h1>
      <input type="number" placeholder="Digite um valor" onChange={alterarValor} />
    </div>
  );
}

export { AlterarValorContext };