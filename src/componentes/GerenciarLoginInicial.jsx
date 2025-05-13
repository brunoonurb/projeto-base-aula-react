import { Badge, Button, Col, Row } from "react-bootstrap";

function GerenciarLoginInicial() {
  return (
    <Row>
      <Col md={12}>
        <a href="/login">
          <Button variant="primary">Login</Button>{" "}
        </a>
      </Col>
    </Row>
  );
}

export { GerenciarLoginInicial };
