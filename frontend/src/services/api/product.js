import Api from './index';

class ApiPrroducts extends Api {
  async getProducts() {
    const res = await this.get('product/');
    return res.json();
  }

  async getProductById(id) {
    const res = await this.get('product/' + id + '/');
    return res.json();
  }

  async putProduct(id_param, data_param) {
    const res = await this.put(
      `product/${id_param}/`,
      JSON.stringify(data_param)
    );
    return res;
  }

  async postProduct(data_param) {
    const res = await this.post('product/', JSON.stringify(data_param));
    return res;
  }

  async deleteProduct(id_param) {
    const res = await this.delete(`product/${id_param}`);
    return res;
  }
}

const productApi = new ApiPrroducts();
export default productApi;
