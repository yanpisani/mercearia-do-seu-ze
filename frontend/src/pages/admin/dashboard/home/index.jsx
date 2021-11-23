import React from 'react';
import './styles.scss';
import Card from '../../../../components/admin/card';

export default function Home() {
  const Cards = [
    {
      section: 'Funcionários',
      link: '/admin/funcionarios',
    },
    {
      section: 'Estoque',
      link: '/admin/estoque',
    },
    {
      section: 'Vendas',
      link: '/admin/sales',
    },
  ];

  return (
    <div className={`admin-home`}>
      <h1>
        <b>Área do Gerente/administrador</b>
      </h1>
      <div className={`admin-card`}>
        {Cards.map((card, index) => {
          return (
            <Card
              key={index.toString()}
              section={card.section}
              to={card.link}
            />
          );
        })}
      </div>
    </div>
  );
}
