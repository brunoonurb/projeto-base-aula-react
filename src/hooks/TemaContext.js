import { createContext, useState } from "react";

export const CreateTemaContext = createContext();

function TemaProvider({ children }) {
  const [corPrimaria, setCorPrimaria] = useState("black");
  const [tema, setTema] = useState("temablue");

  function escolhaTema(nomeTema) {
    if (nomeTema == "temadark") {
      setTema(nomeTema);
    } else if (nomeTema == "temalight") {
      setTema(nomeTema);
    } else if (nomeTema == "temablue") {
      setTema(nomeTema);
    } else {
      alert("Tema não existe");
    }
  }

  return (
    <CreateTemaContext.Provider
      value={{ tema, corPrimaria, setCorPrimaria, escolhaTema }}
    >
      {children}
    </CreateTemaContext.Provider>
  );
}

export { TemaProvider };
