import { Habilidade } from "./Habilidade"

function Habilidades() {
    return (
        <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-primary text-white border-0">
                <h5 className="mb-0"><i className="fa fa-code me-2" />Habilidades</h5>
            </div>
            <div className="card-body">
                <Habilidade nivel={90}>HTML</Habilidade>
                <Habilidade nivel={85}>CSS</Habilidade>
                <Habilidade nivel={80}>JavaScript</Habilidade>
                <Habilidade nivel={75}>React</Habilidade>
                <Habilidade nivel={70}>Node.js</Habilidade>
                <Habilidade nivel={85}>Git</Habilidade>
            </div>
        </div>
    )
}

export { Habilidades }
