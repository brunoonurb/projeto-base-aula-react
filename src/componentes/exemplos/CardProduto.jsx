import { useContext } from "react";
import { CarrinhoContext } from "../../hooks/Carrinho";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  const { adicionarProdutos } = useContext(CarrinhoContext);


  

  return (
    <div>
      <img width={300} src={linkImagem} />
      <div>
        <label>
          {nome} - R$: {preco}
        </label>
        <p>{descricao}</p>
        <button type="button" onClick={()=> adicionarProdutos({idProduto, nome, preco, descricao, linkImagem}) }> 
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
}

export { CardProduto };
