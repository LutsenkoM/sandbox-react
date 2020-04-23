import { userConstants } from '../constants'

const initUser = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
}

const users = (state = initUser, action) => {

  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {}

    case userConstants.LOGIN_REQUEST:
      return {
        user: action.payload
      }

    default:
      return state;
  }

}

export {
  users
};
