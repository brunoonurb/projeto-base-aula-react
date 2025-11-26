import React from 'react';
// Importando os componentes da pasta componentes
import { DadosPessoais } from './componentes/DadosPessoais';
import { Objetivo } from './componentes/Objetivo';
import { Experiencias } from './componentes/Experiencias';
import { Formacao } from './componentes/Formacao';
import { Habilidades } from './componentes/Habilidades';
// Importando o arquivo CSS único
import './componentes/Curriculo.css';

export const Curriculo = () => {
  return (
    <div className="curriculo-container">
      <h1 className="curriculo-titulo">Meu Currículo</h1>
      
      {/* Passando valores diretamente como props para cada componente */}
      
      <DadosPessoais 
        nome="Maria Silva"
        idade={25}
        email="maria.silva@email.com"
        telefone="(11) 99999-8888"
      />

      <Objetivo 
        texto="Busco uma oportunidade como desenvolvedora Front-end para aplicar meus conhecimentos em React e JavaScript, contribuindo com projetos inovadores." 
      />

      <Experiencias 
        listaExperiencias={[
          {
            cargo: "Estagiária de Desenvolvimento",
            empresa: "Tech Company",
            periodo: "2023 - Atual"
          },
          {
            cargo: "Monitora de Informática",
            empresa: "Universidade ABC",
            periodo: "2022 - 2023"
          }
        ]} 
      />

      <Formacao 
        curso="Análise e Desenvolvimento de Sistemas"
        instituicao="Faculdade XYZ"
        ano="2024"
      />

      <Habilidades 
        listaHabilidades={[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Git",
          "Trabalho em equipe",
          "Comunicação"
        ]} 
      />
    </div>
  );
};
