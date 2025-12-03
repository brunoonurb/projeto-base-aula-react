import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const nagivate = useNavigate();

  const [email, setEmail] = useState("alunos@teste.com");
  const [senha, setSenha] = useState("123@123");

  function alterarSenha(e) {
    setSenha(e.target.value);
  }

  async function fazerLogin(e) {
    e.preventDefault();

    if (email === "") {
      alert("O campo e-mail é obrigatório!");
      return;
    }
    if (senha === "") {
      alert("O campo senha é obrigatório!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", senha);

      const resposta = await fetch(
        "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        {
          method: "POST",
          mode: "cors",
          body: formData,
        }
      );

      const dadosResposta = await resposta.json();

      console.log(dadosResposta);

      const nomeUsuario = dadosResposta.user.name;
      const emailUsuario = dadosResposta.user.email;
      const tokenUsuario = dadosResposta.token;

      localStorage.setItem("nomeUsuario", nomeUsuario);
      localStorage.setItem("emailUsuario", emailUsuario);
      localStorage.setItem("tokenUsuario", tokenUsuario);

      
      alert("Login realizado com sucesso!");

      nagivate("/");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }

  return (
    <div>
      <form>
        <h3>Login</h3>
        <br />
        <h4>{email}</h4>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <h3>{senha}</h3>
        <label htmlFor="">
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={alterarSenha}
          />
        </label>
        <br />
        <button onClick={fazerLogin}>Entrar</button>
      </form>
    </div>
  );
}

export { Login };
