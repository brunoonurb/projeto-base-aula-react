import { createContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({ children }) {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    const produtos = localStorage.getItem("listaprodutos");

    if (produtos) {
      setListaProdutos(JSON.parse(produtos));
    }
  }, []);

  function adicionarProdutos(produto) {
    // verifica se esta logado
    // if(token){.....}

    const produtoExistente = listaProdutos.filter(
      (itemProduto) => itemProduto.idProduto == produto.idProduto
    );

    if (produtoExistente.length > 0) {
      alert("Esse produto ja esta na lista");
    } else {
      alert("produtos adicionado");

      const juntarProdutos = [...listaProdutos, produto];
      setListaProdutos(juntarProdutos);

      localStorage.setItem("listaprodutos", JSON.stringify(juntarProdutos));
    }
  }

  function removerProdutos(idProduto) {
    alert("REMOVER PRODUTO");

    const novaListaProdutos = listaProdutos.filter(
      (itemProduto) => itemProduto.idProduto != idProduto
    );

    setListaProdutos(novaListaProdutos);
  }

  return (
    <CarrinhoContext.Provider
      value={{ listaProdutos, adicionarProdutos, removerProdutos }}
    >
      {" "}
      {children}{" "}
    </CarrinhoContext.Provider>
  );
}

export { CarrinhoContextProvider };

//  <CarrinhoContextProvider>
//           <RouteApp />
//       </CarrinhoContextProvider>
