import { GerenciarLogin } from "./GerenciarLogin";
import "./meuNavBar.css";

function MeuNavBar() {
  const tokenUsuario = localStorage.getItem("tokenUsuario");
  return (
    <div className="contanierNavBar">
      <nav>
        <a href="/">Home</a> {" "}|| {" "}
        <a href="/produtos"> Produtos</a>
      </nav>
      <div>
        <label> {tokenUsuario ? "LOGADO" : "DESLOGADO"}</label>
      </div>
      <div>
        <GerenciarLogin />
      </div>
    </div>
  );
}
export { MeuNavBar };
