import { use } from "react";

function GerenciarLogin() {
  const nome = localStorage.getItem("nomeUsuario");
  const email = localStorage.getItem("emailUsuario");
  const token = localStorage.getItem("tokenUsuario");

  function deleteLocalStorage() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsuario");
    localStorage.removeItem("tokenUsuario");
    window.location.reload();
  }

  if (!token) {
    return (
      <div>
        <a href="/login">
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
