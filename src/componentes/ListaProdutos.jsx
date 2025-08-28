import { useEffect, useState } from "react";
import api from "../_service/api";
import { CardProduto } from "./CardProduto";
import { Col, Row } from "react-bootstrap";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    console.log("Buscando produtos...");

    try {
      const response = await api.get("/productlistbyremark/home");

      console.log(response.data);
      setProdutos(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos");
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  console.log("produtos", produtos);

  return (
    <div className="minhaclase">
      <h1>Lista de Produtos</h1>

      <Row>
        {produtos.map((produto) => {
          return (
            <Col>
              <CardProduto
                idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export { ListaProdutos };
