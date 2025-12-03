import { ListaProdutos } from "../componentes/exemplos/ListaProdutos";
import { MeuNavBar } from "../componentes/MeuNavBar";
function Home() {
  return (
    <div>
      <MeuNavBar />
      <h1>HOME</h1>
      <ListaProdutos />
    </div>
  );
}

export { Home };
