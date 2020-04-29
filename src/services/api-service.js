import axios from 'axios';

export default class ApiService {

  _apiBase = 'http://localhost:2000';

  _createHeader = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return  {
      'Authorization': `${token}`
    }
  }

  _getResource = async (url) => {
    const header = await this._createHeader();
    return await axios.get(`${this._apiBase}/${url}`, {headers: header});
  };

  _postResource = async (url, data) => {
    const header = await this._createHeader();
    return await axios.post(`${this._apiBase}/${url}`, data, {headers: header});
  };

  getUsers = async () => {
    const users = await this._getResource('users');
    return users.data;
  }

  registerUser = async (data) => {
    const user = await this._postResource('users', data);
    return user.data;
  }

  loginUser = async (data) => {
    const user = await this._postResource('users/login', data);
    return user.data;
  }

  logOutUser = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  getNews = async () => {
    const news = await this._getResource('news');
    return news.data;
  }

  getSingleUser = async (userId) => {
    const singleUser = await this._getResource(`users/${userId}`);
    return singleUser.data;
  }

  postNews = async (content) => {
    const publishedPost = await this._postResource('news', content);
    return publishedPost.data;
  }

}
