import { userConstants } from '../constants';
import ApiService from '../services/api-service'
import { history } from '../components/helpers/history';

export const userActions = {
  Register,
  Login,
  readUserProfile
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
    loginedUser: user
  };
}

function readUserProfile(user) {
  return {
    type: userConstants.READ_USERS_PROFILE,
    readUser: user
  }
}
