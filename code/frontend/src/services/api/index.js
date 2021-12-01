// import userService from '../userService';
export default class Api {
  constructor() {
    this.baseUrl = 'http://127.0.0.1:8000/';
  }

  async fetchUrl(url, method, body) {
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // Authorization: 'Token ' + this.accessToken,
      },
      method,
    };

    if (body) {
      options.body = body;
    }

    const response = await fetch(this.baseUrl + url, options);

    return response;
  }

  async get(uri) {
    return this.fetchUrl(uri, 'GET');
  }

  async post(uri, body) {
    return this.fetchUrl(uri, 'POST', body);
  }

  async put(uri, body) {
    return this.fetchUrl(uri, 'PUT', body);
  }

  async delete(uri) {
    return this.fetchUrl(uri, 'DELETE');
  }
}
