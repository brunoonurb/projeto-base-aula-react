import { createContext, useEffect, useState } from "react";

export const ExemploContext = createContext();

function ExemploContextProvider({ children }) {
  const [varExemplo, setVarExemplo] = useState('Exemplo o valor aqui');

  function exemplo(valor) {
    alert(valor);
    setVarExemplo(valor)
  }

  return (
    <ExemploContext.Provider value={{ varExemplo, exemplo }}>
      {children}
    </ExemploContext.Provider>
  );
}

export default ExemploContextProvider;
