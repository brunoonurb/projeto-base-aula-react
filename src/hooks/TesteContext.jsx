import { createContext, useState } from "react";

export const ContextApagador = createContext()

function ContextApagadorProvider({ children }) {

    const [canetaAzul, setCanetaAzul] = useState('AZUL ESCURO')

    function escreverComCanetaAzul() {
        alert(`Escrevendo ${canetaAzul}`)
    }

    function trocaCorCanetaAzul(cor) {
        setCanetaAzul(cor)
    }

    return (
        <>
            <ContextApagador.Provider value={{ canetaAzul, escreverComCanetaAzul, trocaCorCanetaAzul }}>
                {children}
            </ContextApagador.Provider>
        </>
    )
}


export default ContextApagadorProvider


