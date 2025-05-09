import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api";
import { CardProduto } from "./CardProduto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      const { data } = await api.get("/productlistbyremark/home");
      setProdutos(data);
    } catch (error) {
      alert("Erro para buscar os produtos.");
    }
  }

  

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h1>Lista de Produtos</h1>
        </Col>
      </Row>
      <Row>
        
        
      </Row>
    </>
  );
}

export { ListaProdutos };
