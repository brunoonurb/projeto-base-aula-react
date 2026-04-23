function CurriculoHeader() {
    return (
        <div className="bg-primary text-white py-5">
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-auto">
                        <div
                            className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
                            style={{ width: 110, height: 110 }}
                        >
                            <i className="fa fa-user text-primary" style={{ fontSize: 52 }} />
                        </div>
                    </div>
                    <div className="col">
                        <h1 className="fw-bold mb-1">Bruno Pedroso</h1>
                        <p className="lead mb-2 opacity-75">Desenvolvedor Full Stack</p>
                        <div className="d-flex flex-wrap gap-3">
                            <span><i className="fa fa-envelope me-1" /> bruno.pedroso@lwtecnologia.com.br</span>
                            <span><i className="fa fa-map-marker me-1" /> São Paulo, SP</span>
                            <span><i className="fa fa-github me-1" /> github.com/brunoperdroso</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CurriculoHeader }
