import React from 'react';

// Componente que recebe dados de formação como props
export const Formacao = ({ curso, instituicao, ano }) => {
  return (
    <div className="secao formacao">
      <h2>Formação</h2>
      <p><strong>Curso:</strong> {curso}</p>
      <p><strong>Instituição:</strong> {instituicao}</p>
      <p><strong>Ano:</strong> {ano}</p>
    </div>
  );
};
