import { ListaProdutos } from "../../componentes/exemplos/ListaProdutos";
import { MeuNavBar } from "../componentes/MeuNavBar";

function Home() {
  return (
    <div>
      <MeuNavBar />

      <ListaProdutos />
      <p>HOME</p>
    </div>
  );
}

export { Home };
