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
  const [posting, setPosting] = useState(false);

  //post
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [batch, setBatch] = useState();
  const [quantity, setQuantity] = useState();
  const [barCode, setBarCode] = useState();
  const [costValue, setCostValue] = useState();
  const [saleValue, setSaleValue] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    const res = await apiProduct.getProducts();
    let auxData = [];

    for (let i = 0; i < res.length; i++) {
      auxData[i] = [
        res[i].id,
        res[i].name,
        res[i].quantity,
        res[i].cost_value,
        res[i].sale_value,
      ];
    }
    setProductsData(auxData);
    setLoading(false);
  }

  async function postProduct() {
    setLoading(true);
    let data = {
      name: name,
      brand: brand,
      batch: batch,
      quantity: quantity,
      bar_code: barCode,
      cost_value: costValue,
      sale_value: saleValue,
    };

    await apiProduct.postProduct(data);
    getProducts();
    setLoading(false);
  }

  async function deleteProductById(id) {
    await apiProduct.deleteProduct(id);
    getProducts();
  }

  return (
    <div className="all-inventory">
      <div className="content-flex">
        <div className="flex">
          <h2>
            <b>Estoque</b>
          </h2>
          <button
            onClick={() => {
              setPosting(!posting);
            }}
          >
            <b>+ Produto</b>
          </button>
        </div>
        <br />
        {!loading && (
          <TableComponent
            data={{
              header: [
                'id',
                'Produto',
                'Unidades',
                'Valor Custo',
                'Valor Venda',
              ],
              data: productData,
            }}
            deleteFunction={deleteProductById}
          />
        )}
        {posting && (
          <div>
            <br />
            <br />
            <h3>
              <b>Adicionar Produto</b>
            </h3>
            <br />
            <form>
              <div className="input-posting">
                <label>Nome:</label>
                <input
                  placeholder="Nome"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-posting">
                <label>Marca:</label>
                <input
                  placeholder="Marca"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-posting">
                <label>Lote:</label>
                <input
                  placeholder="Lote"
                  onChange={(event) => {
                    setBatch(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-posting">
                <label>Unidades:</label>
                <input
                  placeholder="Unidades"
                  onChange={(event) => {
                    setQuantity(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-posting">
                <label>Código de Barras:</label>
                <input
                  placeholder="Código de barras"
                  onChange={(event) => {
                    setBarCode(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-posting">
                <label>Valor Custo:</label>
                <input
                  placeholder="Valor custo"
                  onChange={(event) => {
                    setSaleValue(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-posting">
                <label>Preço de venda:</label>
                <input
                  placeholder="Preço de venda"
                  onChange={(event) => {
                    setCostValue(event.target.value);
                  }}
                ></input>
              </div>
              <button type="submit" onClick={postProduct}>
                Adicionar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
