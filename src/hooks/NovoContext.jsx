import { createContext, useState } from "react";


export const NovoContext = createContext()


function NovoContextProvider({children}) {
  
  const [nome, setNome] = useState('')

  function alteranome(nome){
    setNome(nome)
  }
  
  return(
    <NovoContext.Provider  value={{nome, alteranome, idade:'55',  endereco: 'rua canada'}}>
      {children}
    </NovoContext.Provider>

  )
}

export {NovoContextProvider}