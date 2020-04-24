import { userConstants } from '../constants';
import ApiService from '../services/api-service'
import { history } from '../components/helpers/history';

export const userActions = {
  Register,
  Login
}

const apiService = new ApiService();

function Register(user) {

  apiService.registerUser(user)
    .then((response) => {
      history.push('/login');
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    type: userConstants.REGISTER_REQUEST
  };

}

function Login(user) {
  return {
    type: userConstants.LOGIN_REQUEST,
    payload: user
  };
}

