import { createContext, useEffect, useState } from "react";

export const TesteUseContext = createContext();

function TesteUseContextProvider({ children }) {
  const [teste, setTeste] = useState(10);


  function aumentarValor() {
    setTeste(teste + 1);
    gravarLocalStorage(teste + 1);
  }
  function diminuirValor() {
    setTeste(teste - 1);
    gravarLocalStorage(teste - 1);
  }

function definirValorPadrao(valor = 50) {
  setTeste(valor);
  gravarLocalStorage(valor);
}

function gravarLocalStorage(valor) {
  localStorage.setItem("valorContexto", valor);
}

function lerLocalStorage() {
  return localStorage.getItem("valorContexto");
}

useEffect(() => {
  const valor = lerLocalStorage();
  if (valor) {
    setTeste(valor);
  }
}, []);

  return (
    <TesteUseContext.Provider value={{ teste, aumentarValor, diminuirValor, definirValorPadrao, gravarLocalStorage, lerLocalStorage }}>
      {children}
    </TesteUseContext.Provider>
  );
}

export { TesteUseContextProvider };
