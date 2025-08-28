import { use } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAntigo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navegate = useNavigate()

  function PegarEmail(event) {
    setEmail(event.target.value);
  }

  async function enviarDados() {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await fetch(
        "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        {
          method: "POST",
          mode: "cors",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);
      
      localStorage.setItem("token",  data.token);
      localStorage.setItem("nomeUsuario",  data.user.name);
      localStorage.setItem("emailUsuario",  data.user.email);
      
      navegate("/")

    } catch (error) {
      alert("Erro ao fazer login");
      console.error(error);
    }
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <label>Email: {email}</label>
        <input type="text" placeholder="email" onChange={PegarEmail} />
        <br />
        <label>Senha: {password}</label>
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="button" onClick={enviarDados}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export { LoginAntigo };
