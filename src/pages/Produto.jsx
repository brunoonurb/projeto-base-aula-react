import { useContext } from "react";
import { MeuListarProdutos } from "../componentes/MeuListaProdutos";
import { ContextCarrinho } from "../hooks/TesteCarrinho";
import NavBar from "../componentes/NavBar";

function Produto() {

  const { listaProdutos } = useContext(ContextCarrinho)

  return (
    <div>

      <NavBar>

        <h1>PRODUTO  {listaProdutos?.length} </h1>

        <MeuListarProdutos />
      </NavBar>
    </div>
  );
}

export { Produto };
