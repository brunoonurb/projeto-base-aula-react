import { Tab, Tabs } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { MinhNav } from "../componentes/MinhNav";

function Produtos() {
  return (
    <div className="App">
      Pagina Produtos EXEMPLO

   {/* <MinhNav/> */}

      <ListaProdutos />
    </div>
  );
}

export { Produtos };
