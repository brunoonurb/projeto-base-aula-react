import { useContext } from "react";
import { CreateTemaContext } from "../hooks/TemaContext";
import { TrocaDeCor } from "./TrocaDeCor";

function Tela1({}) {
  const { corPrimaria, escolhaTema, tema } = useContext(CreateTemaContext);

  return (
    <>
      <div className={`${tema}`}>

      ONDE TEM TEMA
      </div>
        <hr />
      <div
        style={{
          backgroundColor: corPrimaria,
        }}
      >
        <p>tela 1 {corPrimaria}</p>

        <h1>Escolha tema</h1>

        <TrocaDeCor />
      </div>
    </>
  );
}
export { Tela1 };
