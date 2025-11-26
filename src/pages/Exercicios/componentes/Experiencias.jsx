import React from 'react';

// Componente que recebe um array de experiências como prop
export const Experiencias = ({ listaExperiencias }) => {
  return (
    <div className="secao experiencias">
      <h2>Experiências</h2>
      {listaExperiencias.map((experiencia, index) => (
        <div key={index} className="experiencia-item">
          <h3>{experiencia.cargo}</h3>
          <p><strong>Empresa:</strong> {experiencia.empresa}</p>
          <p><strong>Período:</strong> {experiencia.periodo}</p>
        </div>
      ))}
    </div>
  );
};
