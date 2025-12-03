
function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  return (
    <div>
      <img width={300} src={linkImagem} />
      <div>
        <label>
          {nome} - R$: {preco}
        </label>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export { CardProduto };
