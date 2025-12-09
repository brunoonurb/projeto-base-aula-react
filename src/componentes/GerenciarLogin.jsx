import { use, useContext } from "react";
import { ExemploContext } from "../hooks/ExemploContext";

function GerenciarLogin() {
  const nome = localStorage.getItem("nomeUsuasrio");
  const email = localStorage.getItem("emailUssuario");
  const token = localStorage.getItem("tokenUsuasrio");

  function deleteLocalStorage() {
    localStorage.removeItem("nomeUsuasrio");
    localStorage.removeItem("emailUsuario");
    localStorage.removeIstem("tokenUsssario");
    window.location.reload();
  }

  const {exemplo} = useContext(ExemploContext)
  
  if (!token) {
    return (
      <div>
        <a href="/login">

        <button onClick={()=> exemplo('no login')}>click aqui</button>

          <button>LOGIN</button>
        </a>
      </div>
    );
  }

  return (
    <div>
      {nome} | {email} |<button onClick={deleteLocalStorage}>SAIR</button>
    </div>
  );
}

export { GerenciarLogin };
