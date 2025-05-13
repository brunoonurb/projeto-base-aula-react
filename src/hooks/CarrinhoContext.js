import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({ children }) {
  const [listaProdutosCarrinho, setListaProdutosCarrinho] = useState([]);

  useEffect(() => {
    buscarProdutosLocaStorage();
  }, []);
  function buscarProdutosLocaStorage() {
    const produtosLocalStorage = localStorage.getItem("carrinho_produtos");

    if (produtosLocalStorage) {
      const produtosProdutos = JSON.parse(produtosLocalStorage);
      setListaProdutosCarrinho(produtosProdutos);
    }
  }

  function salvarProdutos(lista) {
    setListaProdutosCarrinho(lista);
    const listaDeProdutos = JSON.stringify(lista);
    localStorage.setItem("carrinho_produtos", listaDeProdutos);
  }

  const adicionarCarrinho = async (produto) => {
    const qtdProdutosNoCarrinho = listaProdutosCarrinho.filter(
      (item) => item.idProduto == produto.idProduto
    );
    if (qtdProdutosNoCarrinho.length > 0) {
      return toast.error("Produto já esta no seu carrinho", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const listaProdutosAtualizado = [produto, ...listaProdutosCarrinho];
    salvarProdutos(listaProdutosAtualizado);
  };
  function removerProduto(idProduto) {
    const listaProdutosAtualizado = listaProdutosCarrinho.filter(
      (item) => item.idProduto != idProduto
    );

    salvarProdutos(listaProdutosAtualizado);
  }

  return (
    <CarrinhoContext.Provider
      value={{ listaProdutosCarrinho, adicionarCarrinho, removerProduto }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoContextProvider;
