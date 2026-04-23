import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MeuCard({linkImagem, titulo}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MeuCard;