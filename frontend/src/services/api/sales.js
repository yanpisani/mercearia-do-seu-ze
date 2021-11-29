import Api from './index';

class ApiSales extends Api {
  async getSales() {
    const res = await this.get('sales/');
    return res.json();
  }

  async getSalesById(id) {
    const res = await this.get('sales/' + id + '/');
    return res.json();
  }

  async putSales(id_param, data_param) {
    const res = await this.put(
      `sales/${id_param}/`,
      JSON.stringify(data_param)
    );
    return res;
  }

  async postSales(data_param) {
    const res = await this.post('sales/', JSON.stringify(data_param));
    return res;
  }

  async deleteSales(id_param) {
    const res = await this.delete(`sales/${id_param}`);
    return res;
  }
}

const salesApi = new ApiSales();
export default salesApi;
