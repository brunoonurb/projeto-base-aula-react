import { CurriculoHeader } from "./CurriculoHeader";
import { SobreMim } from "./SobreMim";
import { Habilidades } from "../componentes/Habilidades";
import { Idiomas } from "../componentes/Idiomas";
import { Objetivo } from "./Objetivo";
import { Experiencias } from "../componentes/Experiencias";
import { Formacao } from "./Formacao";

function Curriculo() {
    return (
        <div className="bg-light min-vh-100">

            <CurriculoHeader />

            <div className="container py-5">
                <div className="row g-4">

                    <div className="col-lg-4">
                        <SobreMim />
                        <Habilidades />
                        <Idiomas />
                    </div>

                    <div className="col-lg-8">
                        <Objetivo />
                        <Experiencias />
                        <Formacao />
                    </div>

                </div>
            </div>

            <footer className="bg-primary text-white text-center py-3">
                <small className="opacity-75">Bruno Pedroso &copy; {new Date().getFullYear()} — Currículo gerado com React + Bootstrap</small>
            </footer>

        </div>
    )
}

export { Curriculo }
