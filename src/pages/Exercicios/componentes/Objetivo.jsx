import React from 'react';

// Componente que recebe um texto como prop
export const Objetivo = ({ texto }) => {
  return (
    <div className="secao objetivo">
      <h2>Objetivo Profissional</h2>
      <p>{texto}</p>
    </div>
  );
};
