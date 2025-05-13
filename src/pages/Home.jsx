import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";

function Home() {

  return (
    <div>
      <NavBar/>
      <CarouselAnuncios/>
      <ListaProdutos/>
    </div>
  );
}

export { Home };
