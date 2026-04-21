
import "./habilidade.css"

function Habilidade(props) {
    return (
        <div className="hab">
            <p>Nome Habilidade: {props.children}  </p>
        </div>
    )
}

export { Habilidade }