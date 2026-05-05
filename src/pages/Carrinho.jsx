import { useContext } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import NavBar from "../componentes/NavBar";
import { ContextCarrinho } from "../hooks/TesteCarrinho";

function Carrinho() {
  const { listaProdutos, removerProduto } = useContext(ContextCarrinho);


  return (
    <>
      <NavBar>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1>Lista de produtos carrinho </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Produto</th>
                  <th>Descricao</th>
                  <th>Preço</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {listaProdutos?.map((produtoCarrinho, index) => {
                  return (
                    <tr>
                      <td> {produtoCarrinho.id}</td>
                      <td> {produtoCarrinho.title}</td>
                      <td> {produtoCarrinho.category}</td>
                      <td> {produtoCarrinho.price} R$</td>
                      <td>
                        <Button
                          onClick={() => removerProduto(produtoCarrinho.id)}
                          variant="danger"
                        >
                          Remover
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </NavBar>
    </>
  );
}

export { Carrinho };
