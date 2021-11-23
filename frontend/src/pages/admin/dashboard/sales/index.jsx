import React, { useEffect, useState } from 'react';
import './style.scss';
import TableComponent from '../../../../components/Table/index.jsx';
import InputMask from 'react-input-mask';

export default function Sales() {
  const [productData, setUsersData] = useState({
    header: [],
    data: [],
  });
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();

  async function toggleEditing(id) {
    setIsEditing(true);
    setEditId(id);
  }

  return (
    <div className="all-employees">
      <div className="content-flex">
        <div className="flex">
          <h2>
            <b>Vendas</b>
          </h2>
          <button
            onClick={() => {
              setPosting(!posting);
            }}
          >
            <b>+ Vendas</b>
          </button>
        </div>
        <br />
        {!loading && (
          <TableComponent
            data={{
              header: ['Código', 'Qtd itens', 'Clientes', 'Valor Total'],
              data: [],
            }}
          />
        )}
        {(posting || isEditing) && (
          <div>
            <br />
            <br />
            <h3>
              <b>Adicionar Venda</b>
            </h3>
            <br />

            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
