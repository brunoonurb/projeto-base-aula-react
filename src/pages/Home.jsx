import { useContext } from "react";
import { ListaProdutos } from "../componentes/exemplos/ListaProdutos";
import { MeuNavBar } from "../componentes/MeuNavBar";
import { ExemploContext } from "../hooks/ExemploContext";
function Home() {
  
  const { varExemplo, exemplo } = useContext(ExemploContext);

  return (
    <div>
      <MeuNavBar />
      <br />
      <br />
      <br />
      <br />
      <h1>HOME. -- valor = {varExemplo}</h1>

      <button onClick={()=> exemplo('na home')}>click aqui</button>
      <ListaProdutos />
    </div>
  );
}

export { Home };
