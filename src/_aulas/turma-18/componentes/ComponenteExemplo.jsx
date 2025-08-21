function ComponenteExemplo(props) {
  return (
    <div className="minhaClasse">
      <h1>EXEMPLO</h1>
      <div>
        <p>Nome: {props.nome} </p>
        <p>Idade: {props.idade} </p>
      </div>
      <div>
        MEU CHILCDREN
        {props.children}
      </div>
    </div>
  );
}

export { ComponenteExemplo };
