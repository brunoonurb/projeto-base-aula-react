function Formacao() {
    return (
        <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-primary text-white border-0">
                <h5 className="mb-0"><i className="fa fa-graduation-cap me-2" />Formação</h5>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h6 className="fw-bold text-primary mb-0">Análise e Desenvolvimento de Sistemas</h6>
                        <p className="text-muted mb-0">Universidade XYZ</p>
                    </div>
                    <span className="badge bg-primary-subtle text-primary rounded-pill px-3">2022 - atual</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h6 className="fw-bold text-primary mb-0">Curso de Desenvolvimento Web</h6>
                        <p className="text-muted mb-0">Devon Tecnologia</p>
                    </div>
                    <span className="badge bg-primary-subtle text-primary rounded-pill px-3">2023</span>
                </div>
            </div>
        </div>
    )
}

export { Formacao }
