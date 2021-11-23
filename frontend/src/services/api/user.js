import Api from './index';

class ApiUsers extends Api {
  async getUsers() {
    const res = await this.get('users/');
    return res.json();
  }

  async getUsersById(id) {
    const res = await this.get('users/' + id + '/');
    return res.json();
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
    const res = await this.delete(`users/${id_param}/`);
    return res;
  }
}

const userApi = new ApiUsers();
export default userApi;
