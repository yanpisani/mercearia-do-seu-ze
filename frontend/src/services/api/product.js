import Api from './index';

class ApiPrroducts extends Api {
  async getPrroducts() {
    const res = await this.get('product/');
    res.json();
  }

  async putUser(id_param, data_param) {
    const res = await this.put(
      `product/${id_param}/`,
      JSON.stringify(data_param)
    );
    return res;
  }

  async postUser(data_param) {
    const res = await this.post('product/', JSON.stringify(data_param));
    return res;
  }

  async deleteUser(id_param) {
    const res = await this.delete(`user/${id_param}`);
    return res;
  }
}

const userApi = new ApiPrroducts();
export default userApi;
