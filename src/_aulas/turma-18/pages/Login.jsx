import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      alert("Erro ao enviar dados");
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

export { Login };
