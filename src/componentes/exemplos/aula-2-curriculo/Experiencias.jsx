import { Experiencia } from "./Experiencia"

function Experiencias() {
    return (
        <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-primary text-white border-0">
                <h5 className="mb-0"><i className="fa fa-briefcase me-2" />Experiências</h5>
            </div>
            <div className="card-body pt-4">
                <Experiencia
                    cargo="Estagiário de Desenvolvimento"
                    empresa="Harve"
                    periodo="2023 - atual"
                    descricao="Desenvolvimento de aplicações web utilizando React e Node.js, participação em code reviews e implementação de novas funcionalidades."
                />
                <Experiencia
                    cargo="Freelancer"
                    empresa="Projetos Pessoais"
                    periodo="2022 - 2023"
                    descricao="Desenvolvimento de sites e landing pages para pequenas empresas utilizando HTML, CSS e JavaScript."
                />
            </div>
        </div>
    )
}

export { Experiencias }
