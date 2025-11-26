import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { PrimeiroComponente } from "./componentes/PrimeiroComponente";

function App() {
  return (
    <div className="App">
      <PrimeiroComponente sobrenome="Pedroso" idade="20" />
      <hr />
      <PrimeiroComponente 
        sobrenome="Silva" 
        idade="30" 
        altura="1.75"
      >
        Este é o conteúdo do props.children
      </PrimeiroComponente>
      <hr />
      <PrimeiroComponente sobrenome="Oliveira">
        esse ehsegundo conteúdo
      </PrimeiroComponente>
      Helo World!
    </div>
  );
}

export default App;
