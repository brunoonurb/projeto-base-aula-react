import { useContext } from "react";
import { CreateTemaContext } from "../hooks/TemaContext";

function Tela2({}) {
  const { setCorPrimaria, tema } = useContext(CreateTemaContext);

  return (
    <div className={`${tema}`}>
      <p>tela 2</p>

      <button onClick={() => setCorPrimaria("green")}> cor 1</button>
      <button onClick={() => setCorPrimaria("red")}> cor 2</button>
      <button onClick={() => setCorPrimaria("#0fe9e944")}> cor 3</button>
      <button onClick={() => setCorPrimaria("#5755c744")}> cor 4</button>
      <button onClick={() => setCorPrimaria("#ca1bb244")}> cor 5</button>
      <button onClick={() => setCorPrimaria("yellow")}> cor 5</button>
    </div>
  );
}
export { Tela2 };
