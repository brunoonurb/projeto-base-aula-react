import { Tela1 } from "../componentes/Tela1";
import { Tela2 } from "../componentes/Tela2";
import { TemaProvider } from "../hooks/TemaContext";

function Temas() {
  return (
    <div className="App">
      <p>TEMA</p>
      <TemaProvider>
        <Tela1 />
        <Tela2 />
      </TemaProvider>
    </div>
  );
}
export { Temas };
