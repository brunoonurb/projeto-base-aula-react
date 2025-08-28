import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { TesteUseContext } from "../hooks/TesteUseContext";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import "./navBar.css";

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
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            SISTEMA
          </Link>
          
          <nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos" className="nav-link">PRODUTOS</Link>
              </li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <Link to="/login" className="btn-login">FAZER LOGIN</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          SISTEMA
        </Link>
        
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/produtos" className="nav-link">PRODUTOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/carrinho" className="nav-link">
                CARRINHO
                <span className="cart-count">{listaProdutos.length}</span>
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-user-info">
                <span><b>Nome:</b> {nome}</span>
                <span><b>Email:</b> {email}</span>
                <span>QTD TESTES: {teste}</span>
              </div>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <button onClick={sair} className="btn-logout">SAIR</button>
        </div>
      </div>
    </div>
  );
}

export { MeuNavBar };
