import { useContext } from "react";
import { MeuNavBar } from "./MeuNavBar";
import { NovoContext } from "../hooks/NovoContext";



function AlterNome(props) {
  const { alteranome } = useContext(NovoContext);

  return (
    <div className="minhaClasse">
      <p>componente alter nome</p>

      <input type="text" onChange={(event) => alteranome(event.target.value)} />
  
    </div>
  );
}

export { AlterNome };
