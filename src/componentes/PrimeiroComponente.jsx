function PrimeiroComponente(props) {
  return (
    <div  className="primeiro">
      <h1>PrimeiroComponente</h1>

      <p> {props.children} </p>

      <p>Sobrenome: {props.sobrenome}</p>
      <p>idade: {props.idade}</p>
      <h1 >altura: {props.altura}</h1>
    </div>
  );
}

export { PrimeiroComponente };
