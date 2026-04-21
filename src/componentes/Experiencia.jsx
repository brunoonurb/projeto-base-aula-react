

function Experiencia(props) {
    return (
        <div className="azul">
            <p>Cargo:   {props.cargo}   </p>
            <p>Empresa: {props.empresa} </p>
            <p>Periodo: {props.periodo} </p>

        </div>
    )
}

export { Experiencia }