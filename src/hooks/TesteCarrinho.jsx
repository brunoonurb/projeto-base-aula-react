import { createContext, useEffect, useState } from "react";

export const ContextCarrinho = createContext()

function ContextCarrinhoProvider({ children }) {

    const [listaProdutos, setListaProdutos] = useState([])


    useEffect(() => {
        buscaProdutos()
    }, [])

    function buscaProdutos() {
        const listaProdutosJson = localStorage.getItem('lista-produtos')

        if (listaProdutosJson) {
            const listaProdutos = JSON.parse(listaProdutosJson)

            setListaProdutos(listaProdutos)
        } else {
            setListaProdutos([])
        }


    }

    function adicionarCarrinho(produto) {

        if (!produto) {
            alert('nao tem produtos')
        }


        const produtoExistente = listaProdutos.filter((minhaLista) => minhaLista.id == produto.id)

        if (produtoExistente.length != 0) {
            alert('produtos ja foi adicionado')
            return
        }


        const novaListaProdutos = [...listaProdutos, produto]

        localStorage.setItem('lista-produtos', JSON.stringify(novaListaProdutos))

        buscaProdutos()

    }


    function removerProduto(idProduto) {

        const novaLista = listaProdutos.filter((minhaLista) => minhaLista.id != idProduto)

        localStorage.setItem('lista-produtos', JSON.stringify(novaLista))

        buscaProdutos()


    }





    return (
        <>
            <ContextCarrinho.Provider value={{ adicionarCarrinho, listaProdutos, removerProduto }}>
                {children}
            </ContextCarrinho.Provider>
        </>
    )
}


export default ContextCarrinhoProvider


