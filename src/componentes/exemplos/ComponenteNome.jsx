import { useEffect, useState } from "react";

function ComponenteNome() {

const [nome, setNome] = useState("Nome");  

useEffect(() =>{
  alert("Ola seja bem vindo");
}, [])

useEffect(() =>{
  alert(`Nome alterado para: ${nome}`);
}, [nome])

  return (
    <div>
      <button type="button" onClick={()=> setNome('BRU')}> APELIDO</button>
      <button type="button" onClick={()=> setNome('BRUNO')}> NOME</button>
      <br />
      <input type="text" placeholder="NOME"  
      onChange={(evento)=> setNome(evento.target.value) }
      />
      <br />
      <p>Nome: {nome}</p>
    </div>
  );
}
export { ComponenteNome };