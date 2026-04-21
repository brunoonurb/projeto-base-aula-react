import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

import { Nome } from "./componentes/Nome"
import { Sobrenome } from "./componentes/Sobrenome";
import { Habilidade } from "./componentes/Habilidade";
import { Experiencia } from "./componentes/Experiencia";



function App() {
  return (
    <div className="App">


      <Nome />

      <Sobrenome />


      <h1>Habilidades</h1>

      <Habilidade> HTML </Habilidade>
      <Habilidade> CSS </Habilidade>
      <Habilidade> JS </Habilidade>
      <Habilidade> REACT </Habilidade>
      <Habilidade> NODE </Habilidade>
      <Habilidade> GIT </Habilidade>


      <h1>Experiencias</h1>

      <Experiencia cargo="Estagiario" empresa="Harve" periodo="2023-momento" />

    </div>
  );
}

export default App;
