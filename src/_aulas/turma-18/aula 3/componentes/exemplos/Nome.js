import { useEffect, useState } from "react";

function Nome() {
  const [nome, setNome] = useState("Nome");
  const [sobrenome, setSobrenome] = useState("");

  useEffect(() => {

    if(!sobrenome){
      return
    }
    if(!nome){
      return
    }

    const qtdCaracterNome = nome.length;
    console.log(qtdCaracterNome);
    
    if (qtdCaracterNome > 10) {
      alert("Nome esta muito grande");
    }
  }, [sobrenome, nome]);

  return (
    <div>
      <button onClick={() => setNome("oque eu quiser")}>alter</button>
      <br />
      <input type="text" onChange={(event) => setNome(event.target.value)} />
      <br />
      <p>
        <label>NOME - </label>
        {nome}
      </p>
      <br />
      <input
        type="text"
        onChange={(event) => setSobrenome(event.target.value)}
      />
      <br />
      <p>
        <label>SOBRENOME - </label>
        {sobrenome}
      </p>
    </div>
  );
}

export { Nome };
