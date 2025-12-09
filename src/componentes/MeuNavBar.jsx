import { useContext } from "react";
import { GerenciarLogin } from "./GerenciarLogin";
import "./meuNavBar.css";
import { CarrinhoContext } from "../hooks/Carrinho";

function MeuNavBar() {
  const { listaProdutos } = useContext(CarrinhoContext);

  console.log(listaProdutos);
  

  const tokenUsuario = localStorage.getItem("tokenUsuario");
  return (
    <div className="contanierNavBar">
      <nav>
        <a href="/">Home</a> || <a href="/produtos"> Produtos</a>
      </nav>
      <div>
        <label> {tokenUsuario ? "LOGADO" : "DESLOGADO"}</label>
      </div>
      <div>quantidade de produtos : {listaProdutos.length}</div>
      <div>
        <GerenciarLogin />
      </div>
    </div>
  );
}
export { MeuNavBar };
