import React, { useEffect, useState } from 'react';
import './style.scss';
import TableComponent from '../../../../components/Table/index.jsx';
import apiSales from '../../../../services/api/sales';
import InputMask from 'react-input-mask';

export default function Sales() {
  const [salesData, setSalesData] = useState({
    header: [],
    data: [],
  });
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();

  //data
  const [products, setProducts] = useState();
  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    getSales();
  }, []);

  async function getSales() {
    setLoading(true);
    const res = await apiSales.getSales();

    let auxData = [];

    for (let i = 0; i < res.length; i++) {
      auxData[i] = [
        res[i].id,
        res[i].products,
        res[i].cost_total,
        res[i].timestamp,
      ];
    }
    setSalesData(auxData);
    setLoading(false);
  }

  async function deleteSaleById(id) {
    setLoading(true);
    await apiSales.deleteSales(id);
    getSales();
    setLoading(false);
  }

  async function postSale() {
    setLoading(true);
    let data = {
      products: products,
      cost_total: totalCost,
    };
    await apiSales.postSales(data);

    getSales();
    setLoading(false);
  }
  async function putSales() {
    setLoading(true);
    let data = {
      products: products,
      cost_total: totalCost,
    };
    await apiSales.putSales(editId, data);
    getSales();
    setEditId(null);
    setIsEditing(false);
    setLoading(false);
  }

  async function toggleEditing(id) {
    setLoading(true);
    setIsEditing(true);
    setEditId(id);
    let res = await apiSales.getSalesById(id);
    console.log(res);
    setProducts(res.products);
    setTotalCost(res.cost_total);
    setLoading(false);
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
              header: ['id', 'produtos', 'total', 'Data'],
              data: salesData,
            }}
            deleteFunction={deleteSaleById}
            editFunction={toggleEditing}
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
            <form>
              <div className="input-posting">
                <label>Produtos:</label>
                <InputMask
                  placeholder="Produtos"
                  onChange={(event) => {
                    setProducts(event.target.value);
                  }}
                  value={products}
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Valor Total da compra:</label>
                <InputMask
                  placeholder="Valor Total"
                  onChange={(event) => {
                    setTotalCost(event.target.value);
                  }}
                  value={totalCost}
                ></InputMask>
              </div>

              <button
                type="submit"
                onClick={() => {
                  if (!isEditing) postSale();
                  else putSales();
                }}
              >
                Adicionar
              </button>
            </form>
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
