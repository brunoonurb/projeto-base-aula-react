import { useContext } from "react";
import { CreateTemaContext } from "../hooks/TemaContext";

function TrocaDeCor({}) {
  const { escolhaTema } = useContext(CreateTemaContext);

  return (
    <div>
     <h1>Troca de cor</h1>

     <button className="temadark" onClick={() => escolhaTema("temadark")}> temadark </button>
      <button className="temalight" onClick={() => escolhaTema("temalight")}> temalight </button>
      <button className="temablue" onClick={() => escolhaTema("temablue")}> temablue </button>
      <button className="green" onClick={() => escolhaTema("green")}> green </button>
    </div>
  );
}
export { TrocaDeCor };
