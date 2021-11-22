import React from 'react';
import './style.scss';
import TableComponent from '../../../../components/Table/index.jsx';

export default function index() {
  return (
    <div className="all-inventory">
      <div className="content-flex">
        <h2>
          <b>Estoque</b>
        </h2>
        <br />
        <TableComponent
          data={{
            header: ['Produto', 'Unidades', 'Valor Custo', 'Valor Venda'],
            data: [],
          }}
        />
      </div>
    </div>
  );
}
