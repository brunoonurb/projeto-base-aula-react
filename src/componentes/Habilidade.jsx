
function Habilidade({ children, nivel = 80 }) {
    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">{children}</span>
                <span className="text-muted small">{nivel}%</span>
            </div>
            <div className="progress" style={{ height: '8px' }}>
                <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${nivel}%` }}
                    aria-valuenow={nivel}
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
        </div>
    )
}

export { Habilidade }
