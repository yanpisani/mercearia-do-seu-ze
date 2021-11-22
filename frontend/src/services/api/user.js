import Api from './index';

class ApiUsers extends Api {
  async getUsers() {
    const res = await this.get('users/');
    res.json();
  }

  async putUser(id_param, data_param) {
    const res = await this.put(
      `users/${id_param}/`,
      JSON.stringify(data_param)
    );
    return res;
  }

  async postUser(data_param) {
    const res = await this.post('users/', JSON.stringify(data_param));
    return res;
  }

  async deleteUser(id_param) {
    const res = await this.delete(`user/${id_param}`);
    return res;
  }
}

const userApi = new ApiUsers();
export default userApi;
