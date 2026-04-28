import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../_service/api";


function MeuListarProdutos() {

  const [produtos, setProdutos] = useState([])



  async function buscarProdutos() {

    console.log('buscarProdutos');
    try {
      // axios.get("http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/productlistbyremark/home")
      const resposta = await api.get("/productlistbyremark/home")

      const produtosApi = resposta.data

      console.log("RESULTADO - ", produtosApi);

      setProdutos(produtosApi)


    } catch (error) {
      alert("Deu ruim")
    }

  }

  useEffect(() => {
    buscarProdutos()
  }, [])

  return (
    <div>
      <h1>Lista Produtos</h1>
      <div>
        <Row>
          {produtos.map((produto) => {
            return (<Col>
              <br />
              <p> {produto.title}  </p>
              <p> {produto.price}  </p>
              <img src={produto.image} width={100} />
            </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )

}

export { MeuListarProdutos };
