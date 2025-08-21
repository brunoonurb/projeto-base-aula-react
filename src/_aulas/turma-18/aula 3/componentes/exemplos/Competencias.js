function Competencias(props) {
  return (
    <div>
      <p>nome: {props.nome} </p>

      <p>Ddscrião: {props.descricao}</p>
      <p>Experiencia: {props.exp}</p>

      <div> {props.children}</div>
      <hr />
    </div>
  );
}

export { Competencias };
