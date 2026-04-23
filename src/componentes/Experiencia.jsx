
function Experiencia({ cargo, empresa, periodo, descricao }) {
    return (
        <div className="d-flex mb-4">
            <div className="flex-shrink-0 me-3 text-center">
                <div
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 44, height: 44 }}
                >
                    <i className="fa fa-briefcase text-white" />
                </div>
                <div className="bg-secondary mx-auto mt-1" style={{ width: 2, height: '100%', minHeight: 20 }} />
            </div>
            <div className="flex-grow-1">
                <div className="card border-0 shadow-sm">
                    <div className="card-body py-3">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h6 className="card-title mb-0 fw-bold text-primary">{cargo}</h6>
                                <p className="card-subtitle text-muted mb-1">{empresa}</p>
                            </div>
                            <span className="badge bg-primary-subtle text-primary rounded-pill px-3">
                                {periodo}
                            </span>
                        </div>
                        {descricao && <p className="card-text small text-secondary mt-2 mb-0">{descricao}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Experiencia }
