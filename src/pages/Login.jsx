import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState({ email: false, password: false });

  let navegate = useNavigate()

  function PegarEmail(event) {
    setEmail(event.target.value);
  }

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(prev => ({ ...prev, [type]: true }));
      
      // Reset do status após 2 segundos
      setTimeout(() => {
        setCopyStatus(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      alert('Erro ao copiar para a área de transferência');
    }
  };

  async function enviarDados() {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      enviarDados();
    }
  };

  return (
    <div className="login-container">
      <div className="box login-box">
        <div className="form-group" style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 className="login-title">Bem-vindo</h1>
          <p className="login-subtitle">Faça login para continuar</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              placeholder="Digite seu email" 
              value={email}
              onChange={PegarEmail}
              onKeyPress={handleKeyPress}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={handleKeyPress}
              className="form-input"
            />
          </div>

          <button 
            type="button" 
            onClick={enviarDados}
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="tip-box">
          <p className="tip-text">
            <strong>Dica:</strong> Use Enter para fazer login rapidamente
          </p>
          <div className="credentials-container">
            <div className="credential-item">
              <span className="credential-text">Email: alunos@teste.com</span>
              <button 
                className="copy-button"
                onClick={() => copyToClipboard('alunos@teste.com', 'email')}
                title="Copiar email"
              >
                {copyStatus.email ? '✓ Copiado!' : '📋 Copiar'}
              </button>
            </div>
            <div className="credential-item">
              <span className="credential-text">Senha: 123@123</span>
              <button 
                className="copy-button"
                onClick={() => copyToClipboard('123@123', 'password')}
                title="Copiar senha"
              >
                {copyStatus.password ? '✓ Copiado!' : '📋 Copiar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
