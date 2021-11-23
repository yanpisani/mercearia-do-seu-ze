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
  ];

  return (
    <div className={`admin-home`}>
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
