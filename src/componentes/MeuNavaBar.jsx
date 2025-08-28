import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { TesteUseContext } from "../hooks/TesteUseContext";
import { CarrinhoContext } from "../hooks/CarrinhoContext";

function MeuNavBar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const { teste } = useContext(TesteUseContext);
  const { listaProdutos } = useContext(CarrinhoContext);
  function buscarDadosUsuario() {
    const nomeusuario = localStorage.getItem("nomeUsuario");
    const emailusuario = localStorage.getItem("emailUsuario");
    const token = localStorage.getItem("token");

    setEmail(emailusuario);
    setNome(nomeusuario);
    setToken(token);
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsuario");
    window.location.reload();
  }

  useEffect(() => {
    buscarDadosUsuario();
  }, []);

  if (!token) {
    return (
      <div className="bg-white">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>
        </ul>

        <Link to="/login">FAZER LOGIN</Link>
        <hr />
      </div>
    );
  }

  return (
    <div className="bg-white">
      SISTEN
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/produtos">PRODUTOS</Link>
        </li>
        <li>
          <Link to="/carrinho">CARRINHO</Link>
        </li>
        <li>
          Quantidade de produtos no carrinho: {listaProdutos.length}
        </li>
        <li>
          <b>Nome:</b> {nome} | <b>Email:</b> {email}
        </li>
        <li>QTD TESTES: {teste}</li>
      </ul>
      <Button onClick={sair}>SAIR</Button>
      <hr />
    </div>
  );
}

export { MeuNavBar };
