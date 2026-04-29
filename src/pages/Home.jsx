import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";

function Home() {

  return (
    <div>

      <NavBar />
      <h1>HOME</h1>
      <CarouselAnuncios />
    </div>
  );
}

export { Home };
