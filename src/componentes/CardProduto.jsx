import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

function CardProduto({ idProduto, nome, preco, linkImagem }) {
  

  return (
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          Preço: R$ {preco} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };
