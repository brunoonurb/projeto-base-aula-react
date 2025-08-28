import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CardProduto({ idProduto, nome, preco, linkImagem }) {
  let navigate = useNavigate();
  const { adicionarProduto } = useContext(CarrinhoContext);

  function adicionarProdutoCarrinho() {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Faça login para adicionar produtos ao carrinho");
      navigate("/login");
      return;
    }
    adicionarProduto({ idProduto, nome, preco, linkImagem });
    alert("Produto adicionado ao carrinho");
  }

  return (
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          Preço: R$ {preco} 
        </Card.Text>
        <Button variant="primary" onClick={adicionarProdutoCarrinho}>Adicionar</Button>
      </Card.Body>
    </Card>
  );
}

export { CardProduto };
