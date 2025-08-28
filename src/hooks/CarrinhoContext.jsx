import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({ children }) {
  
  const [listaProdutos, setListaProdutos] = useState([]);

  function gravarLocalStorage(listaProdutos) {
    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
  }
  function lerLocalStorage() {
    const lista = localStorage.getItem("listaProdutos");
    if (lista) {
      setListaProdutos(JSON.parse(lista));
    }
  }

  function adicionarProduto(produto) {
    
    const produtoJaExiste = listaProdutos.filter((p) => p.idProduto === produto.idProduto);
    if (produtoJaExiste.length > 0) {
      alert("Produto já existe no carrinho");
      return;
    }
    const lista = [...listaProdutos, produto];
    setListaProdutos(lista);
    gravarLocalStorage(lista);
  } 

  function removerProduto(idProduto) {
    const lista = listaProdutos.filter((produto) => produto.idProduto !== idProduto);
    setListaProdutos(lista);
    gravarLocalStorage(lista);
  }

  useEffect(() => {
    lerLocalStorage();
  }, []);

  return (
    <CarrinhoContext.Provider value={{ listaProdutos, adicionarProduto, removerProduto }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export { CarrinhoContextProvider };
