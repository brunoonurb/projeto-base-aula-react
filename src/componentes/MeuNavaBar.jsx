import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MeuNavBar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

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
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/produto">PRODUTO</Link>
          </li>
        </ul>

        <Link to="/login">FAZER LOGIN</Link>
        <hr />
      </div>
    );
  }

  return (
    <div>
      SISTEN
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/produto">PRODUTO</Link>
        </li>
        <li>
         <b>Nome:</b> {nome} | <b>Email:</b> {email}
        </li>
      </ul>
      <Button onClick={sair}>SAIR</Button>
      <hr />
    </div>
  );
}

export { MeuNavBar };
