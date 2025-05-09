import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { useNavigate } from "react-router-dom";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  const { adicionarCarrinho } = useContext(CarrinhoContext);
  let navigate = useNavigate();

  function adicionarNoCarrinho(
    idProduto,
    nomeProduto,
    precoProduto,
    descricaoProduto,
    linkImagemProduto
  ) {
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }

    adicionarCarrinho({
      idProduto,
      nomeProduto,
      descricaoProduto,
      precoProduto,
      linkImagemProduto,
    });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>
          {nome} - R$: {preco}
        </Card.Title>
        <Card.Text>{descricao}</Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            adicionarNoCarrinho(idProduto, nome, preco, descricao, linkImagem)
          }
        >
          ADICIONAR
        </Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };
