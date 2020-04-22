import axios from 'axios';

export default class ApiService {

  _apiBase = 'http://localhost:2000';

  getResource = async (url) => {
    return await axios.get(`${this._apiBase}/${url}`);
  };

  postResource = async (url, data) => {
    return await axios.post(`${this._apiBase}/${url}`, {data});
  };

  getUsers = async () => {
    const users = await this.getResource('users');
    return users.data;
  }

}
