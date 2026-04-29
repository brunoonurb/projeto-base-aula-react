import { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";



function Login() {

    const [email, setEmail] = useState("alunos@teste.com")
    const [senha, setSenha] = useState("123@123")

    let navigate = useNavigate()

    function alteraSenha(event) {
        setSenha(event.target.value)
    }

    async function enviaDados() {
        // alert (`enviar para API ${email} ${senha}`)

        try {


            const form = new FormData();
            form.append("email", email);
            form.append("password", senha);

            const response = await fetch('https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login',
                {
                    method: "POST",
                    mode: "cors",
                    body: form
                    // body: JSON.stringify({email, senha})
                })

            const resultado = await response.json()


            localStorage.setItem("token", resultado.token)
            localStorage.setItem("nomeUsuario", resultado.user.name)
            localStorage.setItem("emailUsuario", resultado.user.email)

            alert("LOGADO COM SUCESSO")

            navigate('/')


        } catch (error) {
            alert("EROO: SAI DAQUI, VC NÃO TEM ACESSO")
        }
    }

    return (
        <div className="divLogin">
            <div className="containerLogin">
                <h1>Login</h1>
                <div className="div-input">
                    <label>Email {email}</label>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="div-input">
                    <label>Senha {senha}</label>
                    <input type="password" onChange={alteraSenha} />
                </div>
                <button type="submit" onClick={enviaDados}>Entrar</button>
            </div>
        </div>
    );
}

export { Login };