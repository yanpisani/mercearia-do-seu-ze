import React, { useEffect, useState } from 'react';
import './style.scss';
import TableComponent from '../../../../components/Table/index.jsx';
import apiProduct from '../../../../services/api/product';

export default function Stock() {
  const [productData, setProductsData] = useState({
    header: [],
    data: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  async function getProducts() {
    const res = await apiProduct.getProducts();
    let auxData = [];

    for (let i = 0; i < res.length; i++) {
      auxData[i] = [
        res[i].name,
        res[i].quantity,
        res[i].cost_value,
        res[i].sale_value,
      ];
    }
    setProductsData(auxData);
    setLoading(false);
  }

  return (
    <div className="all-inventory">
      <div className="content-flex">
        <h2>
          <b>Estoque</b>
        </h2>
        <br />
        {!loading && (
          <TableComponent
            data={{
              header: ['Produto', 'Unidades', 'Valor Custo', 'Valor Venda'],
              data: productData,
            }}
          />
        )}
      </div>
    </div>
  );
}
