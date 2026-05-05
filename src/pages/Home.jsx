import { useContext } from "react";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";
import { ContextApagador } from "../hooks/TesteContext";

function Home() {

  const {  trocaCorCanetaAzul } = useContext(ContextApagador)


  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


    
      
      <input type="text" onChange={(event) => trocaCorCanetaAzul(event.target.value)} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <NavBar />
      <h1>HOME</h1>
      <CarouselAnuncios />
    </div>
  );
}

export { Home };
