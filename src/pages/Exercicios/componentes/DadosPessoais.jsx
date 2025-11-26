import React from 'react';

// Componente simples que recebe props e exibe dados pessoais
export const DadosPessoais = ({ nome, idade, email, telefone }) => {
  return (
    <div className="secao dados-pessoais">
      <h2>Dados Pessoais</h2>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
    </div>
  );
};
