import React from 'react';
import './styles.scss';
import Card from '../../../../components/admin/card';

export default function Home() {
  const Cards = [
    {
      section: 'Funcionários',
      link: '/admin/funcionarios',
      icon: 'ri-user-line',
    },
    {
      section: 'Estoque',
      link: '/admin/estoque',
      icon: 'ri-home-8-line',
    },
    {
      section: 'Vendas',
      link: '/admin/vendas',
      icon: 'ri-shopping-cart-line',
    },
  ];

  return (
    <div className={`admin-home`}>
      <div className="flex-center">
        <h1>
          <b>Área do Gerente/administrador</b>
        </h1>
      </div>
      <div className="flex-center">
        <div className={`admin-card`}>
          {Cards.map((card, index) => {
            return (
              <Card
                key={index.toString()}
                section={card.section}
                to={card.link}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
