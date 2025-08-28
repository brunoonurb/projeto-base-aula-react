import { Tab, Tabs } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { MinhNav } from "../componentes/MinhNav";
import { AlterarValorContext } from "../componentes/AlterarValorContext";
import { MeuNavBar } from "../componentes/MeuNavaBar";

function Produtos() {
  return (
    <div className="App">
      Pagina Produtos EXEMPLO
<AlterarValorContext />
   {/* <MinhNav/> */}

   <MeuNavBar />

      <ListaProdutos />
    </div>
  );
}

export { Produtos };
