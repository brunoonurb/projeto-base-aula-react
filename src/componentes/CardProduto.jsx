import { Button, Card } from "react-bootstrap";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {


  function adicionarNoCarrinho(
    idProduto,
    nomeProduto,
    precoProduto,
    descricaoProduto,
    linkImagemProduto
  ) {
   alert("adiconado com sucesso")
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
