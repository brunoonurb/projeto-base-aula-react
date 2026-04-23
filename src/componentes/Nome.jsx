import { useEffect, useState } from "react"

function Nome() {

    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()



useEffect(()=>{
    alert("Ola")
}, [nome])


    // useEffect(()=>{
    //     if(!nome) return
    //     alert("Ola vc chegou no nome")


    // }, [nome])


    // useEffect(()=>{
    //     alert("O nome foi alterado")
    // },[nome])

    return (

        <div>

            <h1>Nome</h1>

            <p>{nome}</p>

            <button onClick={()=> setNome("Pedroso") } >Alterar para sobrenome</button>
            <button onClick={()=> setNome("Bruno")} >Alterar para nome</button>
            <button onClick={()=>  setIdade(50) } >Alterar idedae</button>
            <button onClick={()=>  setIdade(60) } >Alterar idedae</button>


        <input type="text" onBlur={(e)=>setNome(e.target.value)} />


        </div>
    )

}

export { Nome }