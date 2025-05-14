import { useEffect, useState } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";

function ListaMunicipio() {
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    buscarEstados();
  }, []);

  async function buscarEstados() {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );

      const data = await response.json();

      setEstados(data);
    } catch (error) {
      console.error("Erro ao buscar estados:", error.message);
    }
  }

  async function buscarMunipios(uf) {
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
      );

      const data = await response.json();

      setMunicipios(data);
    } catch (error) {
      console.error("Erro ao buscar estados:", error.message);
    }
  }

  function onchangeSelect(event) {
    const uf = event.target.value;

    if (!uf) {
      return;
    }

    buscarMunipios(uf);
  }

  return (
    <div className="container">
      <h1>Lista de Municípios</h1>

      <select onChange={onchangeSelect}>
        <option value="">Selecione um estado</option>
        {estados.map((estado) => {
          return (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          );
        })}
      </select>

      <div>
        <ul>
          {municipios.map((municipio) => {
            return (
              <div key={municipio.id}>
                <li>{municipio.nome} | {municipio.microrregiao.mesorregiao.nome}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export { ListaMunicipio };
