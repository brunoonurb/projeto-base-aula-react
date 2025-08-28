import { useContext } from "react";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { MeuNavBar } from "../componentes/MeuNavaBar";

function Carrinho() {
  const { listaProdutos, removerProduto } = useContext(CarrinhoContext);

  function removerProdutoCarrinho(idProduto) {
    removerProduto(idProduto);
    alert("Produto removido do carrinho");
  }


  return (
    <div>
      <MeuNavBar />
      <h1>Carrinho</h1>
      <ul>
        {listaProdutos.map((produto) => (
          <li key={produto.idProduto}>
            <img src={produto.linkImagem} alt={produto.nome} width={100} />
            {produto.nome} - {produto.preco}
            <button onClick={() => removerProdutoCarrinho(produto.idProduto)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Carrinho };