import { Habilidade } from "./Habilidade"

function Idiomas() {
    return (
        <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-primary text-white border-0">
                <h5 className="mb-0"><i className="fa fa-language me-2" />Idiomas</h5>
            </div>
            <div className="card-body">
                <Habilidade nivel={100}>Português (Nativo)</Habilidade>
                <Habilidade nivel={60}>Inglês (Intermediário)</Habilidade>
            </div>
        </div>
    )
}

export { Idiomas }
