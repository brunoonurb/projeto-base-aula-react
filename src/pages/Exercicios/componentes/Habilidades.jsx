import React from 'react';

// Componente que recebe um array de habilidades como prop
export const Habilidades = ({ listaHabilidades }) => {
  return (
    <div className="secao habilidades">
      <h2>Habilidades</h2>
      <ul>
        {listaHabilidades.map((habilidade, index) => (
          <li key={index}>{habilidade}</li>
        ))}
      </ul>
    </div>
  );
};
