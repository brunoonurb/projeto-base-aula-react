import { AlterarValorContext } from "../componentes/AlterarValorContext";
import { ComponenteManipularContext } from "../componentes/ComponenteManipularContext";
import { MeuNavBar } from "../componentes/MeuNavaBar";

function Home() {
  return (
    <div className="bg-dark p-5">
      <MeuNavBar />
      <h1>Home</h1>
      <ComponenteManipularContext />
      <AlterarValorContext />
    </div>
  );
}

export { Home };
